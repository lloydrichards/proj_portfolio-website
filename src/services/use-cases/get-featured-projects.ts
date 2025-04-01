import { Array, Effect, pipe } from "effect";
import { getAllProjects } from "./get-all-projects";

export const getFeaturedProjects = pipe(
  getAllProjects,
  Effect.andThen(Array.filter((project) => project.isFeatured === true)),
  Effect.withSpan("getFeaturedProjects"),
);
