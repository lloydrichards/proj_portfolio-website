import { SkillData } from "@/services/api/get-skill-data";

const WORKING_HOURS_PER_MONTH = 160;

export const useSkillBarChartData = (
  data: SkillData[],
  range: [Date, Date],
) => {
  const filtered = data.filter(
    (row) => new Date(row.date) >= range[0] && new Date(row.date) <= range[1],
  );
  const group = Object.groupBy(filtered, (row) => row.name);

  const parsed = Object.entries(group).map(([name, rows]) => {
    const hours = rows?.reduce(
      (acc, { pensum }) => acc + (pensum / 100) * WORKING_HOURS_PER_MONTH,
      0,
    );
    return { name, type: rows?.[0].type ?? "", hours };
  });
  return parsed.map((row) => ({
    stack: row.type,
    series: row.name,
    value: row.hours ?? 0,
  }));
};
