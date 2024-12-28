import { FC, ReactNode } from "react";
import { ProjectNavigation } from "@/components/organism/project_navigation";
import { getAllProjects } from "@/services/get-all-projects";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const content = await getAllProjects();
  const allProjects = content.map(({ frontmatter }) => frontmatter);
  return (
    <main className="col-span-full grid grid-cols-subgrid">
      <ProjectNavigation projects={allProjects} className="col-span-3" />
      <article className="col-span-8 grid grid-cols-subgrid *:col-span-full">
        {children}
      </article>
    </main>
  );
};

export default ProjectLayout;
