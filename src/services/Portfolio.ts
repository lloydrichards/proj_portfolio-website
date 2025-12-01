import { FileSystem } from "@effect/platform";
import { BunContext } from "@effect/platform-bun";
import { Array, Effect, flow, Option, Order, pipe, Schema } from "effect";
import { MissingContentError } from "@/types/Errors";
import { Project, ProjectMeta } from "@/types/Project";
import { TeamMemberDTO } from "@/types/TeamMember";
import { PROJECT_PATH } from "./consts";
import { DrizzleDB, DrizzleLive } from "./db";
import { teamMember } from "./db/schema";
import type { TeamMember } from "./db/schema/team_member";
import { MDXCompiler } from "./MDXCompiler";
import { makeOGImageURL } from "./utils";

export class Portfolio extends Effect.Service<Portfolio>()("app/Portfolio", {
  dependencies: [BunContext.layer, DrizzleLive, MDXCompiler.Default],
  effect: Effect.gen(function* (_) {
    const fs = yield* FileSystem.FileSystem;
    const mdx = yield* MDXCompiler;
    const db = yield* DrizzleDB;

    const getProject = Effect.fn("Portfolio.getProject")((slug: string) =>
      pipe(
        fs.readFileString(`${PROJECT_PATH}/${slug}.mdx`),
        Effect.flatMap((content) => mdx.use(content)),
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
          Effect.tryPromise({
            try: () => db.select().from(teamMember),
            catch: (error) => {
              console.warn("Failed to fetch team members:", error);
              return new Error("Database query failed");
            },
          }),
          Effect.catchAll(() => Effect.succeed([] as TeamMember[])),
          Effect.andThen((teamMembers) => {
            if (!team || team.length === 0) {
              return Effect.succeed([] as TeamMember[]);
            }

            return pipe(
              Effect.sync(() =>
                Schema.decodeUnknownSync(Schema.Array(TeamMemberDTO))(team),
              ),
              Effect.catchAll((error) => {
                console.warn("Invalid team member data:", error);
                return Effect.succeed([] as (typeof TeamMemberDTO.Type)[]);
              }),
              Effect.map((selectedTeam) =>
                selectedTeam.map(({ firstName, lastName, role }) => {
                  const found = Array.findFirst(
                    teamMembers,
                    (m) =>
                      m.firstName === firstName &&
                      m.lastName === lastName &&
                      m.role === role,
                  );

                  return Option.orElseSome(found, () => {
                    // Generate stable ID from name hash
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
              Effect.map(Array.getSomes),
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
