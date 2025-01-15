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
