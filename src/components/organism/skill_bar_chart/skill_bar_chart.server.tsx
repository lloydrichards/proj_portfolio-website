import { api } from "@/services/api";
import { SkillBarChartClient } from "./skill_bar_chart.client";

export const SkillBarChart = async () => {
  const data = await api.skills.fetchSkillData();

  if (!data) return null;

  return <SkillBarChartClient data={data} />;
};
