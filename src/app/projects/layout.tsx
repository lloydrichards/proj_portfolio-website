import { Mosaic } from "@/components/template/mosaic";
import { getAllProjects } from "@/services/api/get-all-projects";
import { Effect } from "effect";
import { FC, ReactNode } from "react";
import { ProjectNavigation } from "./project_navigation";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await Effect.runPromise(getAllProjects);
  const allProjects = content.map(({ frontmatter }) => frontmatter);
  return (
    <Mosaic sidebar>
      <ProjectNavigation projects={allProjects} />
      {children}
    </Mosaic>
  );
};

export default ProjectLayout;
