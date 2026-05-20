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
  tasks: string[];
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
    OccupationService.create({
      title: formData.title,
      company: formData.company,
      location: formData.location,
      shortDescription: formData.shortDescription,
      tasks: formData.tasks.filter(Boolean).join("; ") || null,
      longDescription: formData.longDescription,
      pensum: formData.pensum,
      isFeatured: formData.isFeatured ? 1 : 0,
      category: formData.categoryId,
      startDate: formData.startDate,
      endDate: formData.endDate,
      skillIds: formData.skillIds,
      attributeIds: formData.attributeIds,
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
  tasks: string[];
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
    OccupationService.update({
      id: formData.id,
      title: formData.title,
      company: formData.company,
      location: formData.location,
      shortDescription: formData.shortDescription,
      tasks: formData.tasks.filter(Boolean).join("; ") || null,
      longDescription: formData.longDescription,
      pensum: formData.pensum,
      isFeatured: formData.isFeatured ? 1 : 0,
      category: formData.categoryId,
      startDate: formData.startDate,
      endDate: formData.endDate,
      skillIds: formData.skillIds,
      attributeIds: formData.attributeIds,
    }),
  );

  revalidatePath("/cv");
  return { success: true };
}

export async function deleteOccupation(id: number) {
  devOnly();

  await RuntimeServer.runPromise(OccupationService.remove(id));

  revalidatePath("/cv");
  return { success: true };
}

export async function getFormOptions() {
  devOnly();

  const [categories, skills, attributes] = await RuntimeServer.runPromise(
    Effect.all([
      OccupationService.allCategories(),
      OccupationService.allSkills(),
      OccupationService.allAttributes(),
    ]),
  );

  return { categories, skills, attributes };
}
