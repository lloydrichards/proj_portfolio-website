import { promises as fs } from "fs";
import { LAB_PATH } from "./consts";
import { getLab } from "./get-lab";

export const getAllLabs = async () => {
  const filenames = await fs.readdir(LAB_PATH);

  const labs = await Promise.all(
    filenames
      .filter((filename) => !filename.endsWith(".tsx"))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        return await getLab(slug);
      }),
  );

  return labs
    .filter((l) => l !== null)
    .sort(
      (a, b) => a!.frontmatter.date.getTime() - b!.frontmatter.date.getTime(),
    );
};
