import { promises as fs } from "fs";

import { PROJECT_PATH } from "./consts";
import { getProject } from "./get-project";

export const getAllProjects = async () => {
  const filenames = await fs.readdir(PROJECT_PATH);

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return await getProject(slug);
    }),
  );

  return projects
    .filter((p) => p !== null)
    .sort(
      (a, b) => b!.frontmatter.date.getTime() - a!.frontmatter.date.getTime(),
    );
};
