"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import { Checkbox } from "@/components/atom/checkbox";
import { Field, FieldLabel } from "@/components/atom/field";
import { Input } from "@/components/atom/input";
import { MarkdownEditor } from "@/components/atom/markdown_editor";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/atom/native-select";
import { Textarea } from "@/components/atom/textarea";
import type { FormOptions, OccupationData } from "./types";

interface OccupationFormProps {
  occupation?: OccupationData | null;
  formOptions: FormOptions;
  onCancel: () => void;
  onSave: (data: {
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
  }) => void;
  isPending: boolean;
}

export function OccupationForm({
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
        <MarkdownEditor
          id="longDesc"
          value={longDescription}
          onChange={setLongDescription}
        />
      </Field>

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
