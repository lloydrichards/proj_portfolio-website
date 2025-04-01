import { BunContext } from "@effect/platform-bun";
import { Effect } from "effect";
import { MDXCompiler } from "./MDXCompiler";
import { DrizzleLive } from "./db";
import { getAllProjects } from "./use-cases/get-all-projects";
import { getFeaturedProjects } from "./use-cases/get-featured-projects";
import { getProject } from "./use-cases/get-project";
import { getTeamMembers } from "./use-cases/get-team-members";

export class ProjectApi extends Effect.Service<ProjectApi>()("app/Project", {
  dependencies: [BunContext.layer, DrizzleLive, MDXCompiler.Default],
  effect: Effect.Do.pipe(
    Effect.bind("all", () => getAllProjects),
    Effect.bind("featured", () => getFeaturedProjects),
    Effect.let(
      "getTeamMembers",
      () => (team: readonly (readonly [string, string])[] | undefined) =>
        getTeamMembers(team).pipe(Effect.provide(DrizzleLive)),
    ),
    Effect.let(
      "getProjectBySlug",
      () => (slug: string) =>
        getProject(slug).pipe(
          Effect.provide([BunContext.layer, MDXCompiler.Default]),
        ),
    ),
  ),
}) {
  static all = this.pipe(Effect.andThen((a) => a.all));
  static featured = this.pipe(Effect.andThen((a) => a.featured));
}
