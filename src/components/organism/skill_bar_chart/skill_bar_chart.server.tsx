import { Dataset } from "@/services/Dataset";
import { RuntimeServer } from "@/services/RuntimeServer";
import { SkillBarChartClient } from "./skill_bar_chart.client";

export const SkillBarChart = async () => {
  const data = await RuntimeServer.runPromise(Dataset.skillDataset());

  if (!data) return null;

  return <SkillBarChartClient data={data} />;
};
