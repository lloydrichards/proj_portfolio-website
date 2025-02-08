import { Effect, pipe } from "effect";
import { getAllLabs } from "./get-all-labs";

export const getFeaturedLabs = pipe(
  getAllLabs,
  Effect.andThen((labs) => labs.filter((lab) => lab.frontmatter.isFeatured)),
);
