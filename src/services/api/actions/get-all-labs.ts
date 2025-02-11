import { FileSystem } from "@effect/platform";
import { Array, Effect, pipe } from "effect";
import { LAB_PATH } from "../../consts";
import { descContent, notEmpty } from "../utils";
import { getLab } from "./get-lab";

export const getAllLabs = pipe(
  FileSystem.FileSystem,
  Effect.andThen((fs) => fs.readDirectory(LAB_PATH)),
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
