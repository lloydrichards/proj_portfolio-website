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
import { Array, Effect, pipe } from "effect";
import { notEmpty } from "../utils";

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
          description: occupation?.jobDescription,
          start_date: new Date(occupation?.startDate ?? ""),
          end_date: occupation?.endDate ? new Date(occupation?.endDate) : null,
          category: category?.toUpperCase() || "",
          skills: skills?.split(",").map((s) => s.trim()) || null,
          attributes: attributes?.split(",").map((s) => s.trim()) || null,
        }),
    ),
  ),
  Effect.map((o) =>
    o.sort((a, b) => {
      if (!a.end_date) return -1;
      return b.start_date.getTime() - a.start_date.getTime();
    }),
  ),
  Effect.withSpan("getAllOccupations"),
);
