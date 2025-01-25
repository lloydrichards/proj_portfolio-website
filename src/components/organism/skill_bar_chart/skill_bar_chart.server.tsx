import { getSkillData } from "@/services/api/get-skill-data";
import { SkillBarChartClient } from "./skill_bar_chart.client";

export type Data = Awaited<ReturnType<typeof getSkillData>>;

export const SkillBarChart = async () => {
  const data = await getSkillData();

  if (!data) return null;

  return <SkillBarChartClient data={data} />;
};
