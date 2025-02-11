import { PROJECT_PATH } from "../../consts";
import { getProject } from "./get-project";

import { FileSystem } from "@effect/platform";
import { Array, Effect, pipe } from "effect";
import { descContent, notEmpty } from "../utils";

export const getAllProjects = pipe(
  FileSystem.FileSystem,
  Effect.andThen((fs) => fs.readDirectory(PROJECT_PATH)),
  Effect.andThen((filenames) =>
    Effect.all(
      pipe(
        filenames,
        Array.map((f) => f.replace(/\.mdx$/, "")),
        Array.map((f) => getProject(f)),
      ),
      { concurrency: "unbounded" },
    ),
  ),
  Effect.map((projects) =>
    projects
      .filter(notEmpty)
      .map(([_, p]) => p)
      .sort(descContent),
  ),
);
