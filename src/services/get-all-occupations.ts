import { promises as fs } from "fs";
import { OCCUPATION_PATH } from "./consts";
import { getOccupation } from "./get-occupation";

export const getAllOccupations = async () => {
  const filenames = await fs.readdir(OCCUPATION_PATH);

  const occupation = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return await getOccupation(slug);
    }),
  );

  return occupation
    .filter((o) => o !== null)
    .sort(
      (a, b) =>
        a!.frontmatter.start_date.getTime() -
        b!.frontmatter.start_date.getTime(),
    );
};
