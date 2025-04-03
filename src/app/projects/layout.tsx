import { Mosaic } from "@/components/template/mosaic";
import { ProjectApi } from "@/services/ProjectApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { FC, ReactNode } from "react";
import { ProjectNavigation } from "./project_navigation";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const allProjects = await RuntimeServer.runPromise(ProjectApi.all);

  return (
    <Mosaic sidebar>
      <ProjectNavigation projects={allProjects} />
      {children}
    </Mosaic>
  );
};

export default ProjectLayout;
