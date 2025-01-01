import { FC, ReactNode } from "react";
import { ProjectNavigation } from "@/components/organism/project_navigation";
import { getAllProjects } from "@/services/get-all-projects";
import { Mosaic } from "@/components/template/mosaic";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await getAllProjects();
  const allProjects = content.map(({ frontmatter }) => frontmatter);
  return (
    <Mosaic sidebar>
      <ProjectNavigation projects={allProjects} />
      {children}
    </Mosaic>
  );
};

export default ProjectLayout;
