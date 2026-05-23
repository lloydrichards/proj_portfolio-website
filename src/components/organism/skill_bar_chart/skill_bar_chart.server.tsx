import { Effect } from "effect";
import { Dataset } from "@/services/Dataset/Dataset";
import { RuntimeServer } from "@/services/RuntimeServer";
import { SkillBarChartClient } from "./skill_bar_chart.client";

export const SkillBarChart = async () => {
  const data = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* Dataset;
      return yield* svc.skillDataset();
    }),
  );

  if (!data) return null;

  return <SkillBarChartClient data={data} />;
};
