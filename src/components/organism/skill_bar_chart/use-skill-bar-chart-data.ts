import { SkillData } from "@/services/api/get-skill-data";

const WORKING_HOURS_PER_MONTH = 160;

export const useSkillBarChartData = (data: SkillData[]) => {
  const group = Object.groupBy(data, (row) => row.name);

  const parsed = Object.entries(group).map(([name, rows]) => {
    const years = rows?.reduce((acc, row) => acc + row.years, 0);
    const months = rows?.reduce((acc, row) => acc + row.months, 0);
    return { name, type: rows?.[0].type ?? "", years, months };
  });
  return parsed.map((row) => ({
    stack: row.type,
    series: row.name,
    value: (row.months ?? 0) * WORKING_HOURS_PER_MONTH,
  }));
};
