import * as t from "io-ts";
import * as td from "io-ts-types";

export const LabMeta = t.type({
  id: t.string,
  title: t.string,
  date: td.DateFromISOString,
  isFeatured: t.union([t.boolean, t.undefined]),
  isPublished: t.union([t.boolean, t.undefined]),
  description: t.string,
  tags: t.array(t.string),
  repo: t.union([t.string, t.undefined]),
  href: t.union([t.string, t.undefined]),
});
export type LabMeta = t.TypeOf<typeof LabMeta>;

export const Lab = t.type({
  ...LabMeta.props,
  slug: t.string,
  pathname: t.string,
  lastModified: td.DateFromISOString,
});
export type Lab = t.TypeOf<typeof Lab>;

export const PROJECT_CATEGORY = t.union([
  t.literal("DESIGN"),
  t.literal("DEVELOP"),
  t.literal("ART"),
  t.literal("GARDEN"),
  t.literal("OTHER"),
]);
export type PROJECT_CATEGORY = t.TypeOf<typeof PROJECT_CATEGORY>;

export const ProjectMeta = t.type({
  id: t.number,
  title: t.string,
  description: t.string,
  isFeatured: t.union([t.boolean, t.undefined]),
  isPublished: t.union([t.boolean, t.undefined]),
  date: td.DateFromISOString,
  category: t.array(PROJECT_CATEGORY),
  image: t.string,
  href: t.union([t.string, t.undefined]),
  repo: t.union([t.string, t.undefined]),
  team: t.union([t.array(t.array(t.string)), t.undefined]),
});
export type ProjectMeta = t.TypeOf<typeof ProjectMeta>;

export const Project = t.type({
  ...ProjectMeta.props,
  slug: t.string,
  pathname: t.string,
  lastModified: td.DateFromISOString,
});
export type Project = t.TypeOf<typeof Project>;
