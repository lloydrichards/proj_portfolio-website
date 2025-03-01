import { PROJECT_PATH } from "../../consts";
import { getProject } from "./get-project";

import { FileSystem } from "@effect/platform";
import { Array, Effect, flow, Order, pipe } from "effect";

export const getAllProjects = pipe(
  FileSystem.FileSystem,
  Effect.andThen((fs) => fs.readDirectory(PROJECT_PATH)),
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
  Effect.withSpan("getAllProjects"),
);
