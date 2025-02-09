import { DatabaseError } from "@/types/errors";
import { Array, Effect, pipe } from "effect";
import { db } from "../../db";
import { notEmpty } from "../utils";

export const getAllOccupations = pipe(
  Effect.tryPromise({
    try: () =>
      db.query.occupation.findMany({
        with: {
          category: true,
          skills: {
            with: {
              skill: true,
            },
          },
          attributes: {
            with: {
              attribute: true,
            },
          },
        },
      }),
    catch: (error) => new DatabaseError({ error }),
  }),
  Effect.map(Array.filter(notEmpty)),
  Effect.map((occupations) =>
    occupations.map((o) => ({
      ...o,
      description: o.jobDescription,
      start_date: new Date(o.startDate),
      end_date: o.endDate ? new Date(o.endDate) : null,
      category: o.category?.name.toUpperCase(),
      skills: o.skills.map((s) => s.skill.name),
      attributes: o.attributes.map((a) => a.attribute.name),
    })),
  ),
  Effect.map((o) =>
    o.sort((a, b) => {
      if (!a.end_date) return -1;
      return b.start_date.getTime() - a.start_date.getTime();
    }),
  ),
);
