import { formatDate } from "@/lib/format";
import { getBaseUrl } from "@/lib/utils";
import { FSReadDirError } from "@/types/errors";
import { Effect } from "effect";
import { promises as fs } from "fs";

export const getSource = (dir: string) =>
  Effect.tryPromise({
    try: () => fs.readFile(dir, "utf-8"),
    catch: () => new FSReadDirError({ path: dir }),
  });

export const getDirectoryFilenames = (dir: string) =>
  Effect.tryPromise({
    try: async () => await fs.readdir(dir),
    catch: () => new FSReadDirError({ path: dir }),
  });

export const notEmpty = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

type Content = {
  date: Date;
};

export const descContent = (a: Content, b: Content) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

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
