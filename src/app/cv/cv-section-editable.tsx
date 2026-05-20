"use client";

import { useState } from "react";
import { AddOccupationButton, OccupationEntry } from "./occupation-entry";

interface OccupationData {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string | null;
  tasks: readonly string[] | null;
  longDescription: string | null;
  pensum: number;
  isFeatures: boolean;
  start_date: Date;
  end_date: Date | null;
  category: string;
  skills: readonly string[] | null;
  attributes: readonly string[] | null;
}

interface FormOptions {
  categories: { id: number; name: string; description: string | null }[];
  skills: {
    id: number;
    name: string;
    type: string | null;
    description: string | null;
  }[];
  attributes: { id: number; name: string; description: string | null }[];
}

interface CvSectionEditableProps {
  occupations: OccupationData[];
  categoryName: string;
  formOptions: FormOptions;
}

export function CvSectionEditable({
  occupations,
  categoryName,
  formOptions,
}: CvSectionEditableProps) {
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <>
      {occupations.map((occ) => (
        <OccupationEntry
          key={occ.id}
          occupation={occ}
          isDev={true}
          formOptions={formOptions}
          editingId={editingId}
          onEditStart={setEditingId}
          onEditEnd={() => setEditingId(null)}
        />
      ))}
      <AddOccupationButton
        categoryName={categoryName}
        formOptions={formOptions}
      />
    </>
  );
}
