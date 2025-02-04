import { Schema } from "effect";

export const LabMeta = Schema.Struct({
  id: Schema.String,
  title: Schema.String,
  date: Schema.Date,
  isFeatured: Schema.optional(Schema.Boolean),
  isPublished: Schema.optional(Schema.Boolean),
  description: Schema.String,
  tags: Schema.Array(Schema.String),
  repo: Schema.optional(Schema.String),
  href: Schema.optional(Schema.String),
});
export type LabMeta = typeof LabMeta.Type;

export const Lab = Schema.Struct({
  ...LabMeta.fields,
  slug: Schema.String,
  pathname: Schema.String,
  lastModified: Schema.Date,
});
export type Lab = typeof Lab.Type;

export const PROJECT_CATEGORY = Schema.Union(
  Schema.Literal("DESIGN"),
  Schema.Literal("DEVELOP"),
  Schema.Literal("ART"),
  Schema.Literal("GARDEN"),
  Schema.Literal("OTHER"),
);
export type PROJECT_CATEGORY = typeof PROJECT_CATEGORY.Type;

export const ProjectMeta = Schema.Struct({
  id: Schema.Number,
  title: Schema.String,
  description: Schema.String,
  isFeatured: Schema.optional(Schema.Boolean),
  isPublished: Schema.optional(Schema.Boolean),
  date: Schema.Date,
  category: Schema.Array(PROJECT_CATEGORY),
  image: Schema.String,
  href: Schema.optional(Schema.String),
  repo: Schema.optional(Schema.String),
  team: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
});
export type ProjectMeta = typeof ProjectMeta.Type;

export const Project = Schema.Struct({
  ...ProjectMeta.fields,
  slug: Schema.String,
  pathname: Schema.String,
  lastModified: Schema.Date,
});
export type Project = typeof Project.Type;
