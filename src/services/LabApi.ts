import { BunFileSystem } from "@effect/platform-bun";
import { Effect } from "effect";
import { getAllLabs } from "./use-cases/get-all-labs";
import { getFeaturedLabs } from "./use-cases/get-featured-labs";

export class LabApi extends Effect.Service<LabApi>()("app/Lab", {
  dependencies: [BunFileSystem.layer],
  effect: Effect.Do.pipe(
    Effect.bind("all", () => getAllLabs),
    Effect.bind("featured", () => getFeaturedLabs),
  ),
  accessors: true,
}) {}
