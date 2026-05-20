"use client";

import { utcFormat } from "d3";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import { Checkbox } from "@/components/atom/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/atom/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/atom/field";
import { Input } from "@/components/atom/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/atom/native-select";
import { Textarea } from "@/components/atom/textarea";
import {
  typefaceBody,
  typefaceHeading4,
  typefaceMeta,
} from "@/components/tokens/typeface";
import {
  createOccupation,
  deleteOccupation,
  updateOccupation,
} from "./actions";

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

interface OccupationEntryProps {
  occupation: OccupationData;
  isDev: boolean;
  formOptions: FormOptions;
  editingId: number | null;
  onEditStart: (id: number) => void;
  onEditEnd: () => void;
}

export function OccupationEntry({
  occupation,
  isDev,
  formOptions,
  editingId,
  onEditStart,
  onEditEnd,
}: OccupationEntryProps) {
  const isEditing = editingId === occupation.id;
  const [isPending, startTransition] = useTransition();
  const [showDelete, setShowDelete] = useState(false);
  const formatDate = (date: Date) => utcFormat("%b %Y")(date);

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
    <article
      className={`group my-6 flex flex-col gap-2 ${isDev && !occupation.isFeatures ? "opacity-50" : ""}`}
    >
      <div className="flex items-start gap-2">
        <div className="grow">
          <h3 className={typefaceHeading4()}>
            {occupation.company} – {occupation.title}
          </h3>
          <i className={typefaceMeta("text-muted-foreground")}>
            {formatDate(occupation.start_date)} →{" "}
            {occupation.end_date ? formatDate(occupation.end_date) : "Present"}
            {isDev && (
              <span className="ml-2 text-xs">({occupation.pensum}%)</span>
            )}
          </i>
        </div>
        {isDev && (
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
        )}
      </div>
      {occupation.description && (
        <p className={typefaceBody()}>{occupation.description}</p>
      )}
      {occupation.tasks && occupation.tasks.length > 0 && (
        <ul className={typefaceBody()}>
          {occupation.tasks.map((task) => (
            <li className="my-2 ml-6 list-disc" key={task}>
              {task}
            </li>
          ))}
        </ul>
      )}
      {isDev && occupation.skills && occupation.skills.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {occupation.skills.map((s) => (
            <Badge key={s} variant="outline" className="text-primary">
              {s}
            </Badge>
          ))}
        </div>
      )}

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
    </article>
  );
}

// --- Form Component ---

interface OccupationFormProps {
  occupation?: OccupationData | null;
  formOptions: FormOptions;
  onCancel: () => void;
  onSave: (data: {
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
  }) => void;
  isPending: boolean;
}

function OccupationForm({
  occupation,
  formOptions,
  onCancel,
  onSave,
  isPending,
}: OccupationFormProps) {
  const [title, setTitle] = useState(occupation?.title ?? "");
  const [company, setCompany] = useState(occupation?.company ?? "");
  const [location, setLocation] = useState(occupation?.location ?? "");
  const [shortDescription, setShortDescription] = useState(
    occupation?.description ?? "",
  );
  const [longDescription, setLongDescription] = useState(
    occupation?.longDescription ?? "",
  );
  const [tasks, setTasks] = useState<string[]>([
    ...(occupation?.tasks ?? [""]),
  ]);
  const [pensum, setPensum] = useState(occupation?.pensum ?? 100);
  const [isFeatured, setIsFeatured] = useState(occupation?.isFeatures ?? true);
  const [categoryId, setCategoryId] = useState<number>(
    formOptions.categories.find(
      (c) => c.name.toUpperCase() === occupation?.category,
    )?.id ??
      formOptions.categories[0]?.id ??
      1,
  );
  const [startDate, setStartDate] = useState(
    occupation?.start_date
      ? occupation.start_date.toISOString().split("T")[0]
      : "",
  );
  const [endDate, setEndDate] = useState(
    occupation?.end_date ? occupation.end_date.toISOString().split("T")[0] : "",
  );
  const [isOngoing, setIsOngoing] = useState(!occupation?.end_date);
  const [selectedSkillIds, setSelectedSkillIds] = useState<number[]>(
    occupation?.skills
      ? formOptions.skills
          .filter((s) => occupation.skills?.includes(s.name))
          .map((s) => s.id)
      : [],
  );
  const [selectedAttributeIds, setSelectedAttributeIds] = useState<number[]>(
    occupation?.attributes
      ? formOptions.attributes
          .filter((a) => occupation.attributes?.includes(a.name))
          .map((a) => a.id)
      : [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      company,
      location,
      shortDescription: shortDescription || null,
      tasks: tasks.filter(Boolean),
      longDescription: longDescription || null,
      pensum,
      isFeatured,
      categoryId,
      startDate,
      endDate: isOngoing ? null : endDate || null,
      skillIds: selectedSkillIds,
      attributeIds: selectedAttributeIds,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 space-y-4 rounded-lg flex flex-col gap-4 border border-secondary p-4"
    >
      {/* Core details */}
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="company">Company</FieldLabel>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="location">Location</FieldLabel>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="category">Category</FieldLabel>
          <NativeSelect
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(Number(e.target.value))}
          >
            {formOptions.categories.map((c) => (
              <NativeSelectOption key={c.id} value={c.id}>
                {c.name}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
      </div>

      {/* Dates & meta */}
      <div className="grid grid-cols-4 gap-3 items-end">
        <Field>
          <FieldLabel htmlFor="startDate">Start</FieldLabel>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="endDate">End</FieldLabel>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={isOngoing}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="pensum">Pensum (%)</FieldLabel>
          <Input
            id="pensum"
            type="number"
            min={0}
            max={100}
            value={pensum}
            onChange={(e) => setPensum(Number(e.target.value))}
          />
        </Field>
        <div className="flex flex-col gap-2 pb-0.5">
          <Field orientation="horizontal">
            <Checkbox
              id="ongoing"
              checked={isOngoing}
              onCheckedChange={(checked) => setIsOngoing(checked === true)}
            />
            <FieldLabel htmlFor="ongoing">Ongoing</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="featured"
              checked={isFeatured}
              onCheckedChange={(checked) => setIsFeatured(checked === true)}
            />
            <FieldLabel htmlFor="featured">Featured</FieldLabel>
          </Field>
        </div>
      </div>

      {/* Descriptions */}
      <Field>
        <FieldLabel htmlFor="shortDesc">Short Description</FieldLabel>
        <Textarea
          id="shortDesc"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          rows={2}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="longDesc">Long Description</FieldLabel>
        <Textarea
          id="longDesc"
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          rows={3}
        />
      </Field>

      {/* Tasks */}
      <FieldGroup>
        <FieldLabel>Tasks</FieldLabel>
        {tasks.length > 0 ? (
          <div className="space-y-1.5">
            {tasks.map((task, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: tasks are edited in-place, not reordered
              <div key={i} className="flex gap-1.5">
                <Input
                  value={task}
                  onChange={(e) => {
                    const next = [...tasks];
                    next[i] = e.target.value;
                    setTasks(next);
                  }}
                  placeholder={`Task ${i + 1}`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 shrink-0"
                  onClick={() => setTasks(tasks.filter((_, j) => j !== i))}
                  disabled={tasks.length === 0}
                >
                  <X data-icon="inline-start" />
                </Button>
              </div>
            ))}
          </div>
        ) : null}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="self-start"
          onClick={() => setTasks([...tasks, ""])}
        >
          <Plus data-icon="inline-start" /> Add Task
        </Button>
      </FieldGroup>

      {/* Skills & Attributes */}
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel>Skills</FieldLabel>
          <MultiSelect
            options={formOptions.skills.map((s) => ({
              id: s.id,
              label: s.name,
            }))}
            selected={selectedSkillIds}
            onChange={setSelectedSkillIds}
            placeholder="Select skills..."
          />
        </Field>
        <Field>
          <FieldLabel>Attributes</FieldLabel>
          <MultiSelect
            options={formOptions.attributes.map((a) => ({
              id: a.id,
              label: a.name,
            }))}
            selected={selectedAttributeIds}
            onChange={setSelectedAttributeIds}
            placeholder="Select attributes..."
          />
        </Field>
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end border-t pt-3">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
}

// --- Multi Select (simple tag-based) ---

function MultiSelect({
  options,
  selected,
  onChange,
  placeholder,
}: {
  options: { id: number; label: string }[];
  selected: number[];
  onChange: (ids: number[]) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = options.filter(
    (o) =>
      !selected.includes(o.id) &&
      o.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex overflow-scroll scrollbar-none gap-1">
        {selected.map((id) => {
          const opt = options.find((o) => o.id === id);
          return (
            <Badge key={id} variant="outline" className="text-primary">
              {opt?.label}
              <button
                type="button"
                onClick={() => onChange(selected.filter((s) => s !== id))}
                className="ml-1 hover:text-destructive"
              >
                <X className="size-4" />
              </button>
            </Badge>
          );
        })}
      </div>
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
        />
        {open && filtered.length > 0 && (
          <div className="absolute z-50 mt-1 max-h-40 w-full overflow-auto rounded-md border bg-popover p-1 shadow-md">
            {filtered.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className="w-full text-left px-2 py-1 text-sm rounded hover:bg-accent"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange([...selected, opt.id]);
                  setSearch("");
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Add Occupation Button ---

export function AddOccupationButton({
  categoryName,
  formOptions,
}: {
  categoryName: string;
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
          tasks: [],
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
