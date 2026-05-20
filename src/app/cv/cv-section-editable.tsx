"use client";

import { Match } from "effect";
import { useState } from "react";
import { AddOccupationButton } from "./add-occupation-button";
import { EducationItem, VolunteerItem, WorkItem } from "./cv-items";
import type { CategoryName, FormOptions, OccupationData } from "./types";

interface CvSectionEditableProps {
  occupations: OccupationData[];
  categoryName: CategoryName;
  formOptions: FormOptions;
}

const ItemComponent = Match.type<CategoryName>().pipe(
  Match.when("WORK", () => WorkItem),
  Match.when("EDUCATION", () => EducationItem),
  Match.when("VOLUNTEER", () => VolunteerItem),
  Match.exhaustive,
);

export function CvSectionEditable({
  occupations,
  categoryName,
  formOptions,
}: CvSectionEditableProps) {
  const [editingId, setEditingId] = useState<number | null>(null);

  const Component = ItemComponent(categoryName);

  return (
    <>
      {occupations.map((occ) => (
        <Component
          key={occ.id}
          occupation={occ}
          mode="edit"
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
