import { Schema } from "effect";

export class LabMeta extends Schema.Class<LabMeta>("LabMeta")({
  id: Schema.String,
  title: Schema.String,
  date: Schema.Date,
  isFeatured: Schema.optional(Schema.Boolean),
  isPublished: Schema.optional(Schema.Boolean),
  description: Schema.String,
  tags: Schema.Array(Schema.String),
  repo: Schema.optional(Schema.String),
  href: Schema.optional(Schema.String),
}) {}

export class Lab extends Schema.Class<Lab>("Lab")({
  ...LabMeta.fields,
  slug: Schema.String,
  pathname: Schema.String,
  lastModified: Schema.Date,
  ogImageURL: Schema.String,
}) {
  static readonly Array = Schema.Array(this);
}
