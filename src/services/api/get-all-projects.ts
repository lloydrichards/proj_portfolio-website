import { PROJECT_PATH } from "../consts";
import { getProject } from "./get-project";

import { Array, Effect, pipe } from "effect";
import { descContent, getDirectoryFilenames, notEmpty } from "./utils";

export const getAllProjects = pipe(
  getDirectoryFilenames(PROJECT_PATH),
  Effect.andThen((filenames) =>
    Effect.all(
      pipe(
        filenames,
        Array.map((f) => f.replace(/\.mdx$/, "")),
        Array.map((f) => getProject(f)),
      ),
    ),
  ),
  Effect.map((projects) => projects.filter(notEmpty).sort(descContent)),
);
