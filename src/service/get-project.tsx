import { allProjects } from "@generated";
import { notFound } from "next/navigation";

export const getProject = async (slug: string) => {
  const project = allProjects.find((project) => project.slugAsParams === slug);
  if (!project) notFound();
  return project;
};
