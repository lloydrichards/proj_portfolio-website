import type { Occupation } from "@/types/Occupation";

export type OccupationData = typeof Occupation.Type;

export type CategoryName = "WORK" | "EDUCATION" | "VOLUNTEER";

export interface FormOptions {
  categories: { id: number; name: string; description: string | null }[];
  skills: {
    id: number;
    name: string;
    type: string | null;
    description: string | null;
  }[];
  attributes: { id: number; name: string; description: string | null }[];
}
