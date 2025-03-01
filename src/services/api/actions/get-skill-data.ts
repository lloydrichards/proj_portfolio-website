import { DatabaseError } from "@/types/errors";
import { addMonths, differenceInMonths } from "date-fns";
import { eq } from "drizzle-orm";
import { Array, Effect, Order, pipe } from "effect";
import { db } from "../../db";
import { occupation, occupationToSkill, skill } from "../../db/schema";

export type SkillData = {
  type: string;
  name: string;
  description: string;
  pensum: number;
  date: string;
};

const generateMonthlyDates = (startDate: Date, endDate: Date): Date[] => {
  const months = differenceInMonths(endDate, startDate);
  return Array.makeBy(months + 1, (i) => addMonths(startDate, i));
};

export const getSkillData = pipe(
  Effect.tryPromise({
    try: () =>
      db
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
        .leftJoin(occupation, eq(occupation.id, occupationToSkill.occupation)),
    catch: (error) => new DatabaseError({ error }),
  }),
  Effect.map((data) =>
    pipe(
      data,
      Array.map((row) =>
        generateMonthlyDates(
          row.startDate ? new Date(row.startDate) : new Date(),
          row.endDate ? new Date(row.endDate) : new Date(),
        ).map((date) => ({
          type: row.type || "",
          name: row.name || "",
          pensum: row.pensum || 100,
          description: row.description || "",
          date: date.toISOString(),
        })),
      ),
      Array.flatten,
      Array.sortBy(Order.mapInput(Order.Date, (d) => new Date(d.date))),
    ),
  ),
  Effect.withSpan("getSkillData"),
);
