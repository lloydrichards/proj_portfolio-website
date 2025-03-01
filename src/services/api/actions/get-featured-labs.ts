import { Array, Effect, pipe } from "effect";
import { getAllLabs } from "./get-all-labs";

export const getFeaturedLabs = pipe(
  getAllLabs,
  Effect.andThen(Array.filter((lab) => lab.isFeatured === true)),
  Effect.withSpan("getFeaturedLabs"),
);
