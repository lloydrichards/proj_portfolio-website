import { Mosaic } from "@/components/template/mosaic";
import { api } from "@/services/api";
import { FC, ReactNode } from "react";
import { ProjectNavigation } from "./project_navigation";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const allProjects = await api.projects.fetchAllProjects();
  return (
    <Mosaic sidebar>
      <ProjectNavigation projects={allProjects} />
      {children}
    </Mosaic>
  );
};

export default ProjectLayout;
