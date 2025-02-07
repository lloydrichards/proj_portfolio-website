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

export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined;
};

type Content = {
  frontmatter: {
    date: Date;
  };
};

export const descContent = (a: Content, b: Content) =>
  b.frontmatter.date.getTime() - a.frontmatter.date.getTime();

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
