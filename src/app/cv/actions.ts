"use server";

import { Effect } from "effect";
import { revalidatePath } from "next/cache";
import { OccupationService } from "@/services/Dataset/OccupationService";
import { RuntimeServer } from "@/services/RuntimeServer";

function devOnly() {
  if (process.env.NODE_ENV !== "development") {
    throw new Error("This action is only available in development");
  }
}

export async function createOccupation(formData: {
  title: string;
  company: string;
  location: string;
  shortDescription: string | null;
  longDescription: string | null;
  pensum: number;
  isFeatured: boolean;
  categoryId: number;
  startDate: string;
  endDate: string | null;
  skillIds: number[];
  attributeIds: number[];
}) {
  devOnly();

  await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* OccupationService;
      return yield* svc.create({
        title: formData.title,
        company: formData.company,
        location: formData.location,
        shortDescription: formData.shortDescription,
        longDescription: formData.longDescription,
        pensum: formData.pensum,
        isFeatured: formData.isFeatured ? 1 : 0,
        category: formData.categoryId,
        startDate: formData.startDate,
        endDate: formData.endDate,
        skillIds: formData.skillIds,
        attributeIds: formData.attributeIds,
      });
    }),
  );

  revalidatePath("/cv");
  return { success: true };
}

export async function updateOccupation(formData: {
  id: number;
  title: string;
  company: string;
  location: string;
  shortDescription: string | null;
  longDescription: string | null;
  pensum: number;
  isFeatured: boolean;
  categoryId: number;
  startDate: string;
  endDate: string | null;
  skillIds: number[];
  attributeIds: number[];
}) {
  devOnly();

  await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* OccupationService;
      return yield* svc.update({
        id: formData.id,
        title: formData.title,
        company: formData.company,
        location: formData.location,
        shortDescription: formData.shortDescription,
        longDescription: formData.longDescription,
        pensum: formData.pensum,
        isFeatured: formData.isFeatured ? 1 : 0,
        category: formData.categoryId,
        startDate: formData.startDate,
        endDate: formData.endDate,
        skillIds: formData.skillIds,
        attributeIds: formData.attributeIds,
      });
    }),
  );

  revalidatePath("/cv");
  return { success: true };
}

export async function deleteOccupation(id: number) {
  devOnly();

  await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* OccupationService;
      return yield* svc.remove(id);
    }),
  );

  revalidatePath("/cv");
  return { success: true };
}

export async function getFormOptions() {
  devOnly();

  const [categories, skills, attributes] = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* OccupationService;
      return yield* Effect.all([
        svc.allCategories(),
        svc.allSkills(),
        svc.allAttributes(),
      ]);
    }),
  );

  return { categories, skills, attributes };
}
