import { Effect } from "effect";
import { DrizzleLive } from "./db";
import { getAllOccupations } from "./use-cases/get-all-occupations";
import { getSkillData } from "./use-cases/get-skill-data";

export class DataApi extends Effect.Service<DataApi>()("app/Data", {
  dependencies: [DrizzleLive],
  effect: Effect.Do.pipe(
    Effect.bind("allOccupations", () => getAllOccupations),
    Effect.bind("skillDataset", () => getSkillData),
  ),
  accessors: true,
}) {}
