import {
  attribute,
  category,
  occupation,
  occupationToAttribute,
  occupationToSkill,
  skill,
} from "@/services/db/schema";
import { Occupation } from "@/types/Occupation";
import { SqliteDrizzle } from "@effect/sql-drizzle/Sqlite";
import { eq, sql } from "drizzle-orm";
import { Array, Effect, Option, Order, pipe } from "effect";
import { notEmpty } from "../utils";

const byStartDate = Order.mapInput(
  Order.reverse(Order.Date),
  (o: { start_date: Date; end_date: Date | null }) => o.start_date,
);
const byCurrent = Order.mapInput(
  Order.boolean,
  (o: { start_date: Date; end_date: Date | null }) => !!o.end_date,
);

export const getAllOccupations = pipe(
  SqliteDrizzle,
  Effect.andThen((db) =>
    db
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
      .groupBy(occupation.id),
  ),
  Effect.map(Array.filter(notEmpty)),
  Effect.map((occupations) =>
    occupations.map(
      ({ occupation, category, attributes, skills }) =>
        new Occupation({
          ...occupation,
          description: occupation?.shortDescription,
          tasks: occupation.tasks?.split(";").map((s) => s.trim()) ?? [],
          longDescription: occupation?.longDescription,
          isFeatures: occupation.isFeatured === 1,
          start_date: new Date(occupation?.startDate ?? ""),
          end_date: occupation?.endDate ? new Date(occupation?.endDate) : null,
          category: category?.toUpperCase() || "",
          skills: splitCoalesce(skills),
          attributes: splitCoalesce(attributes),
        }),
    ),
  ),
  Effect.map(Array.sortBy(Order.combine(byCurrent, byStartDate))),
  Effect.withSpan("getAllOccupations"),
);

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
