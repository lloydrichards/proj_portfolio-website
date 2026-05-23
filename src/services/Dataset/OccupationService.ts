import { eq } from "drizzle-orm";
import { Context, Effect, Layer } from "effect";
import { Database, DrizzleLive } from "../db";
import {
  attribute,
  category,
  occupation,
  occupationToAttribute,
  occupationToSkill,
  skill,
} from "../db/schema";

export interface CreateOccupationInput {
  title: string;
  company: string;
  location: string;
  shortDescription: string | null;
  longDescription: string | null;
  pensum: number;
  isFeatured: number;
  category: number;
  startDate: string;
  endDate: string | null;
  skillIds: number[];
  attributeIds: number[];
}

export interface UpdateOccupationInput extends CreateOccupationInput {
  id: number;
}

export class OccupationService extends Context.Service<OccupationService>()(
  "app/OccupationService",
  {
    make: Effect.gen(function* () {
      const db = yield* Database;

      const allCategories = Effect.fn("OccupationService.allCategories")(() =>
        Effect.tryPromise(() => db.select().from(category)),
      );

      const allSkills = Effect.fn("OccupationService.allSkills")(() =>
        Effect.tryPromise(() => db.select().from(skill)),
      );

      const allAttributes = Effect.fn("OccupationService.allAttributes")(() =>
        Effect.tryPromise(() => db.select().from(attribute)),
      );

      const create = Effect.fn("OccupationService.create")(
        (input: CreateOccupationInput) =>
          Effect.gen(function* () {
            const [inserted] = yield* Effect.tryPromise(() =>
              db
                .insert(occupation)
                .values({
                  title: input.title,
                  company: input.company,
                  location: input.location,
                  shortDescription: input.shortDescription,
                  longDescription: input.longDescription,
                  pensum: input.pensum,
                  isFeatured: input.isFeatured,
                  category: input.category,
                  startDate: input.startDate,
                  endDate: input.endDate,
                })
                .returning(),
            );

            if (input.skillIds.length > 0) {
              yield* Effect.tryPromise(() =>
                db.insert(occupationToSkill).values(
                  input.skillIds.map((skillId) => ({
                    occupation: inserted.id,
                    skill: skillId,
                  })),
                ),
              );
            }

            if (input.attributeIds.length > 0) {
              yield* Effect.tryPromise(() =>
                db.insert(occupationToAttribute).values(
                  input.attributeIds.map((attributeId) => ({
                    occupation: inserted.id,
                    attribute: attributeId,
                  })),
                ),
              );
            }

            return inserted;
          }),
      );

      const update = Effect.fn("OccupationService.update")(
        (input: UpdateOccupationInput) =>
          Effect.gen(function* () {
            const [updated] = yield* Effect.tryPromise(() =>
              db
                .update(occupation)
                .set({
                  title: input.title,
                  company: input.company,
                  location: input.location,
                  shortDescription: input.shortDescription,
                  longDescription: input.longDescription,
                  pensum: input.pensum,
                  isFeatured: input.isFeatured,
                  category: input.category,
                  startDate: input.startDate,
                  endDate: input.endDate,
                })
                .where(eq(occupation.id, input.id))
                .returning(),
            );

            // Replace junction table entries
            yield* Effect.tryPromise(() =>
              db
                .delete(occupationToSkill)
                .where(eq(occupationToSkill.occupation, input.id)),
            );

            yield* Effect.tryPromise(() =>
              db
                .delete(occupationToAttribute)
                .where(eq(occupationToAttribute.occupation, input.id)),
            );

            if (input.skillIds.length > 0) {
              yield* Effect.tryPromise(() =>
                db.insert(occupationToSkill).values(
                  input.skillIds.map((skillId) => ({
                    occupation: input.id,
                    skill: skillId,
                  })),
                ),
              );
            }

            if (input.attributeIds.length > 0) {
              yield* Effect.tryPromise(() =>
                db.insert(occupationToAttribute).values(
                  input.attributeIds.map((attributeId) => ({
                    occupation: input.id,
                    attribute: attributeId,
                  })),
                ),
              );
            }

            return updated;
          }),
      );

      const remove = Effect.fn("OccupationService.remove")((id: number) =>
        Effect.tryPromise(() =>
          db.delete(occupation).where(eq(occupation.id, id)),
        ),
      );

      return {
        allCategories,
        allSkills,
        allAttributes,
        create,
        update,
        remove,
      };
    }),
  },
) {
  static readonly layer = Layer.effect(this, this.make).pipe(
    Layer.provide(DrizzleLive),
  );
}
