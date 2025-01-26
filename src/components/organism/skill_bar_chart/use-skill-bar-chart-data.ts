import { SkillData } from "@/services/api/get-skill-data";

const WORKING_HOURS_PER_MONTH = 160;

export const useSkillBarChartData = (data: SkillData[]) => {
  const group = Object.groupBy(data, (row) => row.name);

  const parsed = Object.entries(group).map(([name, rows]) => {
    const years = rows?.reduce((acc, { years }) => acc + years, 0);
    const hours = rows?.reduce(
      (acc, { months, pensum }) =>
        acc + months * (pensum / 100) * WORKING_HOURS_PER_MONTH,
      0,
    );
    return { name, type: rows?.[0].type ?? "", years, hours };
  });
  return parsed.map((row) => ({
    stack: row.type,
    series: row.name,
    value: row.hours ?? 0,
  }));
};
