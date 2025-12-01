import { addMonths, differenceInMonths } from "date-fns";
import { eq, sql } from "drizzle-orm";
import { Array, Effect, Option, Order, pipe } from "effect";
import type { SkillData } from "@/types/Dataset";
import { Occupation } from "@/types/Occupation";
import { Database, DrizzleLive, SqlLive } from "../db";
import {
  attribute,
  category,
  occupation,
  occupationToAttribute,
  occupationToSkill,
  skill,
} from "../db/schema";
import { notEmpty } from "../utils";

const splitCoalesce = (data: string | null) =>
  pipe(
    data,
    Option.fromNullable,
    Option.flatMap((s) =>
      pipe(
        s.split(","),
        Array.map((a) => a.trim()),
        Array.filter((a) => a.length > 0),
        Array.sort(Order.string),
        Option.liftPredicate((a) => a.length > 0),
      ),
    ),
    Option.getOrElse(() => null),
  );

const byStartDate = Order.mapInput(
  Order.reverse(Order.Date),
  (o: { start_date: Date; end_date: Date | null }) => o.start_date,
);
const byCurrent = Order.mapInput(
  Order.boolean,
  (o: { start_date: Date; end_date: Date | null }) => !!o.end_date,
);

const generateMonthlyDates = (startDate: Date, endDate: Date): Date[] => {
  const months = differenceInMonths(endDate, startDate);
  return Array.makeBy(months + 1, (i) => addMonths(startDate, i));
};

export class Dataset extends Effect.Service<Dataset>()("app/Dataset", {
  dependencies: [DrizzleLive],
  effect: Effect.gen(function* () {
    const db = yield* Database;

    const getAllOccupations = Effect.gen(function* () {
      const results = yield* db
        .select({
          occupation: occupation,
          category: category.name,
          skills: sql<
            string | null
          >`COALESCE(GROUP_CONCAT(DISTINCT ${skill.name}), '')`,
          attributes: sql<
            string | null
          >`COALESCE(GROUP_CONCAT(DISTINCT ${attribute.name}), '')`,
        })
        .from(occupation)
        .leftJoin(category, eq(occupation.category, category.id))
        .leftJoin(
          occupationToSkill,
          eq(occupation.id, occupationToSkill.occupation),
        )
        .leftJoin(skill, eq(occupationToSkill.skill, skill.id))
        .leftJoin(
          occupationToAttribute,
          eq(occupation.id, occupationToAttribute.occupation),
        )
        .leftJoin(attribute, eq(occupationToAttribute.attribute, attribute.id))
        .groupBy(occupation.id);

      return pipe(
        results,
        Array.filter(notEmpty),
        (occupations) =>
          occupations.map(
            ({ occupation, category, attributes, skills }) =>
              new Occupation({
                ...occupation,
                description: occupation?.shortDescription,
                tasks: occupation.tasks?.split(";").map((s) => s.trim()) ?? [],
                longDescription: occupation?.longDescription,
                isFeatures: occupation.isFeatured === 1,
                start_date: new Date(occupation?.startDate ?? ""),
                end_date: occupation?.endDate
                  ? new Date(occupation?.endDate)
                  : null,
                category: category?.toUpperCase() || "",
                skills: splitCoalesce(skills),
                attributes: splitCoalesce(attributes),
              }),
          ),

        Array.sortBy(Order.combine(byCurrent, byStartDate)),
      );
    });

    const getSkillData = Effect.gen(function* () {
      const results = yield* db
        .select({
          type: skill.type,
          name: skill.name,
          description: skill.description,
          startDate: occupation.startDate,
          endDate: occupation.endDate,
          pensum: occupation.pensum,
          occupation: occupation.id,
        })
        .from(occupationToSkill)
        .leftJoin(skill, eq(skill.id, occupationToSkill.skill))
        .leftJoin(occupation, eq(occupation.id, occupationToSkill.occupation));

      return pipe(
        results,
        Array.groupBy((row) => row.occupation?.toString() ?? ""),
        Array.fromRecord,
        Array.map(([_, rows]) =>
          rows.flatMap((row) =>
            generateMonthlyDates(
              row.startDate ? new Date(row.startDate) : new Date(),
              row.endDate ? new Date(row.endDate) : new Date(),
            ).map(
              (date) =>
                ({
                  type: row.type || "",
                  name: row.name || "",
                  pensum: row.pensum || 100,
                  factor: 1 / rows.length,
                  description: row.description || "",
                  date: date.toISOString(),
                }) satisfies SkillData,
            ),
          ),
        ),
        Array.flatten,
        Array.sortBy(Order.mapInput(Order.Date, (d) => new Date(d.date))),
      );
    });

    return {
      allOccupations: Effect.fn("Dataset.getAllOccupations")(
        () => getAllOccupations,
      ),
      currentCurriculumVitae: Effect.fn("Dataset.currentCurriculumVitae")(() =>
        getAllOccupations.pipe(
          Effect.andThen((e) =>
            pipe(
              e,
              Array.filter((o) => o.isFeatures),
              Array.groupBy((o) => o.category),
            ),
          ),
        ),
      ),
      skillDataset: Effect.fn("Dataset.getSkillData")(() => getSkillData),
    };
  }),
  accessors: true,
}) {}
