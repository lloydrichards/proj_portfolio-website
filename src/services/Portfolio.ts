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
  effect: Effect.Do.pipe(
    Effect.bind("fs", () => FileSystem.FileSystem),
    Effect.bind("mdx", () => MDXCompiler),
    Effect.bind("db", () => DrizzleDB),

    Effect.let("getProject", ({ fs, mdx }) =>
      Effect.fn("Portfolio.getProject")((slug: string) =>
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
                  isPublished: frontmatter.isPublished ?? true,
                }),
              ] as const,
          ),
          Effect.catchTag("BadArgument", () =>
            Effect.fail(new MissingContentError({ slug })),
          ),
          Effect.tap(() => Effect.annotateCurrentSpan("slug", slug)),
        ),
      ),
    ),
    Effect.bind("all", ({ getProject, fs }) =>
      pipe(
        fs.readDirectory(PROJECT_PATH),
        Effect.andThen((filenames) =>
          Effect.all(
            pipe(
              filenames,
              Array.map((f) => f.replace(/\.mdx$/, "")),
              Array.map(getProject),
            ),
            { concurrency: "unbounded" },
          ),
        ),
        Effect.map(
          flow(
            Array.map(([_, p]) => p),
            Array.sortBy(Order.mapInput(Order.number, (d) => d.id)),
            Array.reverse,
          ),
        ),
        Effect.withSpan("Portfolio.all"),
      ),
    ),
    Effect.let("featured", ({ all }) =>
      Array.filter(all, (project) => project.isFeatured === true),
    ),
    Effect.let("getTeamMembers", ({ db }) =>
      Effect.fn("Portfolio.getTeamMembers")(
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
      ),
    ),
  ),
  accessors: true,
}) {}
