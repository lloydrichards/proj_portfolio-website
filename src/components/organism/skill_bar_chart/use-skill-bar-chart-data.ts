import type { SkillData } from "@/types/Dataset";

const WORKING_HOURS_PER_MONTH = 160;

export const useSkillBarChartData = (
  data: readonly (typeof SkillData.Encoded)[],
  range: [Date, Date],
) => {
  const seriesDomain = Array.from(new Set(data.map((d) => d.type)));
  const filtered = data.filter(
    (row) => new Date(row.date) >= range[0] && new Date(row.date) <= range[1],
  );
  const group = Object.groupBy(filtered, (row) => row.name);

  const parsed = Object.entries(group)
    .map(([name, rows]) => {
      const hours = rows?.reduce(
        (acc, { pensum, factor }) =>
          acc + (pensum / 100) * WORKING_HOURS_PER_MONTH * factor,
        0,
      );
      return { name, type: rows?.[0].type ?? "", hours };
    })
    .map((row) => ({
      stack: row.type,
      series: row.name,
      value: Math.round(row.hours ?? 0),
    }));

  return { parsed, seriesDomain };
};
