import { Schema } from "effect";
import React from "react";

const PROJECT_CATEGORY = Schema.Union(
  Schema.Literal("DESIGN"),
  Schema.Literal("DEVELOP"),
  Schema.Literal("ART"),
  Schema.Literal("GARDEN"),
  Schema.Literal("OTHER"),
);

export class ProjectMeta extends Schema.Class<ProjectMeta>("ProjectMeta")({
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
  team: Schema.optional(
    Schema.Array(Schema.Tuple(Schema.String, Schema.String)),
  ),
}) {
  static readonly MDX = Schema.Struct({
    content: Schema.declare(React.isValidElement),
    frontmatter: this,
  });
}

export class Project extends Schema.Class<Project>("Project")({
  ...ProjectMeta.fields,
  slug: Schema.String,
  pathname: Schema.String,
  lastModified: Schema.Date,
  ogImageURL: Schema.String,
}) {
  static readonly Array = Schema.Array(this);
}
