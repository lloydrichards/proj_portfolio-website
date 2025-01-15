import { getAllProjects } from "./get-all-projects";

export const getFeaturedProjects = async () => {
  const allProjects = await getAllProjects();

  return allProjects.filter((project) => project.frontmatter.isFeatured);
};
