import { differenceInMonths, differenceInYears } from "date-fns";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { occupation, occupationToSkill, skill } from "../db/schema";

export const getSkillData = async () => {
  const rawData = await db
    .select({
      type: skill.type,
      name: skill.name,
      description: skill.description,
      startDate: occupation.startDate,
      endDate: occupation.endDate,
    })
    .from(occupationToSkill)
    .leftJoin(skill, eq(skill.id, occupationToSkill.skill))
    .leftJoin(occupation, eq(occupation.id, occupationToSkill.occupation));

  const data = rawData
    .map((row) => {
      const startDate = row.startDate ? new Date(row.startDate) : new Date();
      const endDate = row.endDate ? new Date(row.endDate) : new Date();

      if (!row.name || !row.type) return null;
      return {
        ...row,
        startDate,
        endDate,
        years: differenceInYears(endDate, startDate),
        months: differenceInMonths(endDate, startDate),
      };
    })
    .filter(Boolean);

  return Object.groupBy(data, (item) => item?.name ?? "");
};
