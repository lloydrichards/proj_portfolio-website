import { formatDate } from "@/lib/format";
import { getBaseUrl } from "@/lib/utils";
import { promises as fs } from "fs";

export const getSource = async (dir: string) => {
  try {
    const content = await fs.readFile(dir, "utf-8");
    return content;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};

export const notEmpty = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

export const filterT =
  <T>(fn: (v: T) => boolean) =>
  (arr: T[]) =>
    arr.filter(fn);

export const mapT =
  <T, U>(fn: (v: T) => U) =>
  (arr: T[]) =>
    arr.map(fn);

type Content = {
  frontmatter: {
    date: Date;
  };
};

export const descContent = (a: Content, b: Content) =>
  new Date(b.frontmatter.date).getTime() -
  new Date(a.frontmatter.date).getTime();

export const makeOGImageURL = ({
  title,
  description,
  date,
  tags,
}: {
  title: string;
  description: string;
  tags?: Array<string>;
  date?: Date;
}) => {
  const baseUrl = new URL(`${getBaseUrl()}/api/og`);
  baseUrl.searchParams.set("title", title);
  baseUrl.searchParams.set("description", description);
  if (tags) {
    baseUrl.searchParams.set("tags", tags.join(","));
  }
  if (date) {
    baseUrl.searchParams.set("date", formatDate(new Date(date)));
  }
  return baseUrl.pathname + baseUrl.search;
};
