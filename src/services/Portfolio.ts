import { MissingContentError } from "@/types/Errors";
import { Project, ProjectMeta } from "@/types/Project";
import { TeamMemberDTO } from "@/types/TeamMember";
import { FileSystem } from "@effect/platform";
import { BunContext } from "@effect/platform-bun";
import { SqliteDrizzle } from "@effect/sql-drizzle/Sqlite";
import { Array, Effect, flow, Option, Order, pipe, Schema } from "effect";
import { MDXCompiler } from "./MDXCompiler";
import { PROJECT_PATH } from "./consts";
import { DrizzleLive } from "./db";
import { teamMember } from "./db/schema";
import { TeamMember } from "./db/schema/team_member";
import { makeOGImageURL } from "./utils";

export class Portfolio extends Effect.Service<Portfolio>()("app/Portfolio", {
  dependencies: [BunContext.layer, DrizzleLive, MDXCompiler.Default],
  effect: Effect.Do.pipe(
    Effect.bind("fs", () => FileSystem.FileSystem),
    Effect.bind("mdx", () => MDXCompiler),
    Effect.bind("db", () => SqliteDrizzle),

    Effect.let("getProject", ({ fs, mdx }) =>
      Effect.fn("Portfolio.getProject")((slug: string) =>
        pipe(
          fs.readFileString(PROJECT_PATH + `/${slug}.mdx`),
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
            db.select().from(teamMember),
            Effect.andThen((teamMembers) =>
              pipe(
                Option.fromNullable(team),
                Option.match({
                  onNone: () => [],
                  onSome: (team) => team,
                }),
                Schema.decodeUnknownSync(Schema.Array(TeamMemberDTO)),
                Array.map(({ firstName, lastName, role }) =>
                  Option.orElseSome(
                    Array.findFirst(
                      teamMembers,
                      (m) =>
                        m.firstName == firstName &&
                        m.lastName == lastName &&
                        m.role == role,
                    ),
                    () =>
                      ({
                        id: -Math.random(),
                        firstName,
                        lastName,
                        role,
                        imgUrl: null,
                      }) as TeamMember,
                  ),
                ),
                Array.getSomes,
              ),
            ),
            Effect.withSpan("getTeamMembers"),
          ),
      ),
    ),
  ),
  accessors: true,
}) {}
