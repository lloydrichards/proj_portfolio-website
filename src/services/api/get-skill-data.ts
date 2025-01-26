import { addMonths, differenceInMonths } from "date-fns";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { occupation, occupationToSkill, skill } from "../db/schema";
import { notEmpty } from "./utils";

export type SkillData = {
  type: string;
  name: string;
  description: string;
  pensum: number;
  date: string;
};

const generateMonthlyDates = (startDate: Date, endDate: Date): Date[] => {
  const months = differenceInMonths(endDate, startDate);
  return Array.from({ length: months + 1 }, (_, i) => addMonths(startDate, i));
};

export const getSkillData = async () => {
  const rawData = await db
    .select({
      type: skill.type,
      name: skill.name,
      description: skill.description,
      startDate: occupation.startDate,
      endDate: occupation.endDate,
      pensum: occupation.pensum,
    })
    .from(occupationToSkill)
    .leftJoin(skill, eq(skill.id, occupationToSkill.skill))
    .leftJoin(occupation, eq(occupation.id, occupationToSkill.occupation));

  const data = rawData
    .flatMap((row) => {
      const startDate = row.startDate ? new Date(row.startDate) : new Date();
      const endDate = row.endDate ? new Date(row.endDate) : new Date();

      if (!row.name || !row.type) return null;

      return generateMonthlyDates(startDate, endDate).map((date) => ({
        type: row.type || "",
        name: row.name || "",
        pensum: row.pensum || 100,
        description: row.description || "",
        date: date.toISOString(),
      }));
    })
    .filter(notEmpty)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return data;
};
