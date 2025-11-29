import { Array, Effect, pipe } from "effect";
import { DrizzleLive } from "../db";
import { getAllOccupations } from "./get-all-occupations";
import { getSkillData } from "./get-skill-data";

export class Dataset extends Effect.Service<Dataset>()("app/Dataset", {
  dependencies: [DrizzleLive],
  effect: Effect.gen(function* () {
    return {
      allOccupations: Effect.fn("Dataset.getAllOccupations")(
        () => getAllOccupations,
      ),
      currentCurriculumVitae: Effect.fn("Dataset.currentCurriculumVitae")(() =>
        getAllOccupations.pipe(
          Effect.andThen((e) =>
            pipe(
              e,
              Array.filter((o) => o.isFeatures),
              Array.groupBy((o) => o.category),
            ),
          ),
        ),
      ),
      skillDataset: Effect.fn("Dataset.getSkillData")(() => getSkillData),
    };
  }),
  accessors: true,
}) {}
