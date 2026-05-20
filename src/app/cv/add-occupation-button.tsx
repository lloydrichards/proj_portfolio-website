"use client";

import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/atom/button";
import { createOccupation } from "./actions";
import { OccupationForm } from "./occupation-form";
import type { CategoryName, FormOptions, OccupationData } from "./types";

export function AddOccupationButton({
  categoryName,
  formOptions,
}: {
  categoryName: CategoryName;
  formOptions: FormOptions;
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (!isAdding) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={() => setIsAdding(true)}
      >
        <Plus data-icon="inline-start" /> Add {categoryName}
      </Button>
    );
  }

  const categoryId =
    formOptions.categories.find(
      (c) => c.name.toUpperCase() === categoryName.toUpperCase(),
    )?.id ??
    formOptions.categories[0]?.id ??
    1;

  return (
    <OccupationForm
      formOptions={formOptions}
      occupation={
        {
          id: 0,
          title: "",
          company: "",
          location: "",
          description: null,
          longDescription: null,
          pensum: 100,
          isFeatures: true,
          start_date: new Date(),
          end_date: null,
          category: categoryName,
          skills: null,
          attributes: null,
        } satisfies OccupationData
      }
      onCancel={() => setIsAdding(false)}
      onSave={(data) => {
        startTransition(async () => {
          try {
            await createOccupation({ ...data, categoryId });
            toast.success("Occupation created");
            setIsAdding(false);
          } catch (_e) {
            toast.error("Failed to create occupation");
          }
        });
      }}
      isPending={isPending}
    />
  );
}
