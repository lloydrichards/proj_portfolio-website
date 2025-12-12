import { FileSystem } from "@effect/platform";
import { BunContext } from "@effect/platform-bun";
import {
  Array,
  Effect,
  flow,
  Option,
  Order,
  ParseResult,
  pipe,
  Schema,
} from "effect";
import {
  DatabaseError,
  MissingContentError,
  ValidationError,
} from "@/types/Errors";
import { Project, ProjectMeta } from "@/types/Project";
import { TeamMemberDTO } from "@/types/TeamMember";
import { PROJECT_PATH } from "./consts";
import { Database, DrizzleLive } from "./db";
import { teamMember } from "./db/schema";
import type { TeamMember } from "./db/schema/team_member";
import { MDXCompiler } from "./MDXCompiler";
import { makeOGImageURL } from "./utils";

export class Portfolio extends Effect.Service<Portfolio>()("app/Portfolio", {
  dependencies: [BunContext.layer, DrizzleLive, MDXCompiler.Default],
  effect: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const mdx = yield* MDXCompiler;
    const db = yield* Database;

    const getProject = Effect.fn("Portfolio.getProject")((slug: string) =>
      pipe(
        fs.readFileString(`${PROJECT_PATH}/${slug}.mdx`),
        Effect.flatMap((content) => mdx.compile(content)),
        Effect.flatMap(Schema.decodeUnknown(ProjectMeta.MDX)),
        Effect.andThen(
          ({ content, frontmatter }) =>
            [
              content,
              new Project({
                ...frontmatter,
                slug,
                lastModified: new Date(),
                pathname: `/projects/${slug}`,
                ogImageURL: makeOGImageURL({
                  title: frontmatter.title,
                  description: frontmatter.description,
                  tags: [...frontmatter.category],
                  date: frontmatter.date,
                }),
                status: frontmatter.status ?? "published",
              }),
            ] as const,
        ),
        Effect.catchTag("BadArgument", () =>
          Effect.fail(new MissingContentError({ slug })),
        ),
        Effect.tap(() => Effect.annotateCurrentSpan("slug", slug)),
      ),
    );

    const all = Effect.gen(function* () {
      const fileNames = yield* fs.readDirectory(PROJECT_PATH);

      return yield* Effect.all(
        pipe(
          fileNames,
          Array.map((f) => f.replace(/\.mdx$/, "")),
          Array.map(getProject),
        ),
        { concurrency: "unbounded" },
      ).pipe(
        Effect.map(
          flow(
            Array.map(([_, p]) => p),
            Array.sortBy(Order.mapInput(Order.number, (d) => d.id)),
            Array.reverse,
          ),
        ),
      );
    });

    const visible = all.pipe(
      Effect.map((projects) =>
        projects.filter((project) => {
          if (process.env.NODE_ENV === "production") {
            return project.status === "published";
          }
          return project.status !== "draft";
        }),
      ),
    );

    const featured = all.pipe(
      Effect.map(Array.filter((project) => project.isFeatured === true)),
    );

    const getTeamMembers = Effect.fn("Portfolio.getTeamMembers")(
      (team?: readonly (readonly [string, string])[]) =>
        pipe(
          // Handle empty team case early
          Effect.sync(() => {
            if (!team || team.length === 0) {
              return { skip: true as const, team: [] as typeof team };
            }
            return { skip: false as const, team };
          }),
          Effect.flatMap(({ skip, team: teamData }) => {
            if (skip) {
              return Effect.succeed([] as TeamMember[]);
            }

            return db
              .select()
              .from(teamMember)
              .pipe(
                Effect.mapError(
                  (error) =>
                    new DatabaseError({
                      message: "Failed to fetch team members from database",
                      operation: "select",
                      cause: error,
                    }),
                ),
                Effect.flatMap((teamMembers) =>
                  Schema.decodeUnknown(Schema.Array(TeamMemberDTO))(
                    teamData,
                  ).pipe(
                    Effect.mapError(
                      (parseError) =>
                        new ValidationError({
                          field: "team",
                          message:
                            ParseResult.TreeFormatter.formatErrorSync(
                              parseError,
                            ),
                        }),
                    ),
                    Effect.map((selectedTeam) =>
                      selectedTeam.map(({ firstName, lastName, role }) => {
                        const found = Array.findFirst(
                          teamMembers,
                          (m) =>
                            m.firstName === firstName &&
                            m.lastName === lastName &&
                            m.role === role,
                        );

                        return Option.getOrElse(found, () => {
                          const hash =
                            firstName.charCodeAt(0) +
                            lastName.charCodeAt(0) +
                            role.charCodeAt(0);
                          return {
                            id: -(Math.abs(hash) + 1),
                            firstName,
                            lastName,
                            role,
                            imgUrl: null,
                          } as TeamMember;
                        });
                      }),
                    ),
                  ),
                ),
              );
          }),
          Effect.withSpan("getTeamMembers"),
        ),
    );

    return {
      getProject,
      all,
      visible,
      featured,
      getTeamMembers,
    };
  }),
  accessors: true,
}) {}
