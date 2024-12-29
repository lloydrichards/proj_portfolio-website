import { FC, ReactNode } from "react";
import { ProjectNavigation } from "@/components/organism/project_navigation";
import { getAllProjects } from "@/services/get-all-projects";
import { cn } from "@/lib/utils";
import { Mosaic } from "@/components/template/mosaic";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await getAllProjects();
  const allProjects = content.map(({ frontmatter }) => frontmatter);
  return (
    <Mosaic>
      <ProjectNavigation
        projects={allProjects}
        className="col-span-2 col-start-1 lg:col-span-6 lg:col-start-1"
      />
      {children}
    </Mosaic>
  );
};

export default ProjectLayout;
