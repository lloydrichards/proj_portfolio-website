import { Effect } from "effect";
import { getAllOccupations } from "./use-cases/get-all-occupations";
import { getSkillData } from "./use-cases/get-skill-data";

export class Dataset extends Effect.Service<Dataset>()("app/Dataset", {
  dependencies: [],
  succeed: {
    allOccupations: Effect.fn("Dataset.getAllOccupations")(
      () => getAllOccupations,
    ),
    skillDataset: Effect.fn("Dataset.getSkillData")(() => getSkillData),
  },
  accessors: true,
}) {}
