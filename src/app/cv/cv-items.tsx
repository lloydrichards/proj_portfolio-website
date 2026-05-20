"use client";

import { utcFormat } from "d3";
import { Option, pipe } from "effect";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/atom/dialog";
import { Markdown } from "@/components/atom/markdown";
import {
  typefaceBody,
  typefaceHeading4,
  typefaceMeta,
} from "@/components/tokens/typeface";
import { deleteOccupation, updateOccupation } from "./actions";
import { OccupationForm } from "./occupation-form";
import type { FormOptions, OccupationData } from "./types";

type Mode = "edit" | "prod";

const formatDate = utcFormat("%b %Y");
const formatEndDate = (date: Date | null) =>
  pipe(
    Option.fromNullable(date),
    Option.map(formatDate),
    Option.getOrElse(() => "Present"),
  );

interface ItemProps {
  occupation: OccupationData;
  mode: Mode;
  formOptions?: FormOptions;
  editingId?: number | null;
  onEditStart?: (id: number) => void;
  onEditEnd?: () => void;
}

// --- Shared edit wrapper ---

function EditControls({
  occupation,
  formOptions,
  editingId,
  onEditStart,
  onEditEnd,
  children,
}: {
  occupation: OccupationData;
  formOptions: FormOptions;
  editingId: number | null;
  onEditStart: (id: number) => void;
  onEditEnd: () => void;
  children: React.ReactNode;
}) {
  const isEditing = editingId === occupation.id;
  const [isPending, startTransition] = useTransition();
  const [showDelete, setShowDelete] = useState(false);

  if (isEditing) {
    return (
      <OccupationForm
        occupation={occupation}
        formOptions={formOptions}
        onCancel={onEditEnd}
        onSave={(data) => {
          startTransition(async () => {
            try {
              await updateOccupation({ ...data, id: occupation.id });
              toast.success("Occupation updated");
              onEditEnd();
            } catch (_e) {
              toast.error("Failed to update occupation");
            }
          });
        }}
        isPending={isPending}
      />
    );
  }

  return (
    <div className={"group relative"}>
      <div className="absolute right-0 top-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          className="size-7"
          onClick={() => onEditStart(occupation.id)}
        >
          <Pencil data-icon="inline-start" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-destructive"
          onClick={() => setShowDelete(true)}
        >
          <Trash2 data-icon="inline-start" />
        </Button>
      </div>
      {children}
      <Dialog open={showDelete} onOpenChange={setShowDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete occupation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{occupation.title} at{" "}
              {occupation.company}&quot;? This cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDelete(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                startTransition(async () => {
                  try {
                    await deleteOccupation(occupation.id);
                    toast.success("Occupation deleted");
                    setShowDelete(false);
                  } catch (_e) {
                    toast.error("Failed to delete occupation");
                  }
                });
              }}
              disabled={isPending}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// --- Work Item ---

export function WorkItem({
  occupation,
  mode,
  formOptions,
  editingId,
  onEditStart,
  onEditEnd,
}: ItemProps) {
  const content = (
    <article className="my-6 flex flex-col gap-2">
      <div className={occupation.isFeatures ? "" : "opacity-40"}>
        <h3 className={typefaceHeading4()}>
          {occupation.company} – {occupation.title}
        </h3>
        <i className={typefaceMeta("text-muted-foreground")}>
          {formatDate(occupation.start_date)} →{" "}
          {formatEndDate(occupation.end_date)}
          {mode === "edit" && (
            <span className="ml-2">({occupation.pensum}%)</span>
          )}
        </i>
      </div>
      {occupation.longDescription ? (
        <Markdown
          markdown={occupation.longDescription}
          className={occupation.isFeatures ? "" : "opacity-40"}
        />
      ) : occupation.description ? (
        <p className={typefaceBody("opacity-40")}>{occupation.description}</p>
      ) : null}
      {mode === "edit" && occupation.skills && occupation.skills.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {occupation.skills.map((s) => (
            <Badge
              key={s}
              variant="outline"
              className="text-primary opacity-40"
            >
              {s}
            </Badge>
          ))}
        </div>
      )}
    </article>
  );

  if (mode === "edit" && formOptions && onEditStart && onEditEnd) {
    return (
      <EditControls
        occupation={occupation}
        formOptions={formOptions}
        editingId={editingId ?? null}
        onEditStart={onEditStart}
        onEditEnd={onEditEnd}
      >
        {content}
      </EditControls>
    );
  }

  return content;
}

// --- Education Item ---

export function EducationItem({
  occupation,
  mode,
  formOptions,
  editingId,
  onEditStart,
  onEditEnd,
}: ItemProps) {
  const content = (
    <li className="my-2 ml-6 list-disc">
      <span className={occupation.isFeatures ? "" : "opacity-40"}>
        <strong>{occupation.title},</strong> {occupation.company}
      </span>
      <p className={occupation.isFeatures ? "" : "opacity-40"}>
        <i className={typefaceMeta("text-muted-foreground")}>
          {formatDate(occupation.start_date)} →{" "}
          {formatEndDate(occupation.end_date)}
          {mode === "edit" && (
            <span className="ml-2">({occupation.pensum}%)</span>
          )}
        </i>
      </p>
      {mode === "edit" && occupation.description && (
        <p className={typefaceBody("text-muted-foreground mt-1 opacity-40")}>
          {occupation.description}
        </p>
      )}
    </li>
  );

  if (mode === "edit" && formOptions && onEditStart && onEditEnd) {
    return (
      <EditControls
        occupation={occupation}
        formOptions={formOptions}
        editingId={editingId ?? null}
        onEditStart={onEditStart}
        onEditEnd={onEditEnd}
      >
        {content}
      </EditControls>
    );
  }

  return content;
}

// --- Volunteer Item ---

export function VolunteerItem({
  occupation,
  mode,
  formOptions,
  editingId,
  onEditStart,
  onEditEnd,
}: ItemProps) {
  const content = (
    <li className="my-2 ml-6 list-disc">
      <span className={occupation.isFeatures ? "" : "opacity-40"}>
        <strong>{occupation.title},</strong> {occupation.company}
      </span>
      <p className={occupation.isFeatures ? "" : "opacity-40"}>
        <i className={typefaceMeta("text-muted-foreground")}>
          {formatDate(occupation.start_date)} →{" "}
          {formatEndDate(occupation.end_date)}
          {mode === "edit" && (
            <span className="ml-2">({occupation.pensum}%)</span>
          )}
        </i>
      </p>
      {mode === "edit" && occupation.description && (
        <p className={typefaceBody("text-muted-foreground mt-1 opacity-40")}>
          {occupation.description}
        </p>
      )}
    </li>
  );

  if (mode === "edit" && formOptions && onEditStart && onEditEnd) {
    return (
      <EditControls
        occupation={occupation}
        formOptions={formOptions}
        editingId={editingId ?? null}
        onEditStart={onEditStart}
        onEditEnd={onEditEnd}
      >
        {content}
      </EditControls>
    );
  }

  return content;
}
