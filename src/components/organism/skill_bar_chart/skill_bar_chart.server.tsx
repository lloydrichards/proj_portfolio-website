import { DataApi } from "@/services/DataApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Effect } from "effect";
import { SkillBarChartClient } from "./skill_bar_chart.client";

export const SkillBarChart = async () => {
  const data = await RuntimeServer.runPromise(
    DataApi.pipe(Effect.andThen((a) => a.getSkillDataset)),
  );

  if (!data) return null;

  return <SkillBarChartClient data={data} />;
};
