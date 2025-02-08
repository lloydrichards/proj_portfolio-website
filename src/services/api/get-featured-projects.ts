import { Effect, pipe } from "effect";
import { getAllProjects } from "./get-all-projects";

export const getFeaturedProjects = pipe(
  getAllProjects,
  Effect.andThen((projects) =>
    projects.filter((project) => project.frontmatter.isFeatured),
  ),
);
