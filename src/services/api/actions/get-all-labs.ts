import { Array, Effect, pipe } from "effect";
import { LAB_PATH } from "../../consts";
import { descContent, getDirectoryFilenames, notEmpty } from "../utils";
import { getLab } from "./get-lab";

export const getAllLabs = pipe(
  getDirectoryFilenames(LAB_PATH),
  Effect.andThen((fileNames) =>
    Effect.all(
      pipe(
        fileNames,
        Array.filter((f) => !f.endsWith(".tsx")),
        Array.map((f) => getLab(f)),
      ),
      { concurrency: "unbounded" },
    ),
  ),
  Effect.map((labs) => labs.filter(notEmpty).sort(descContent)),
);
