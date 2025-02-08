import { Effect, pipe } from "effect";
import { promises as fs } from "fs";
import { LAB_PATH } from "../consts";
import { getLab } from "./get-lab";
import { descContent, filterT, mapT, notEmpty } from "./utils";

class FSReadDirError {
  readonly _tag = "FSReadDirError";
  constructor(readonly path: string) {}
}

export const getAllLabs = pipe(
  Effect.tryPromise({
    try: async () => await fs.readdir(LAB_PATH),
    catch: () => new FSReadDirError(LAB_PATH),
  }),
  Effect.andThen((fileNames) =>
    Effect.all(
      pipe(
        fileNames,
        filterT((f) => !f.endsWith(".tsx")),
        mapT((f) => getLab(f)),
      ),
    ),
  ),
  Effect.map((labs) => labs.filter(notEmpty).sort(descContent)),
);
