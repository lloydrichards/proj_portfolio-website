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
