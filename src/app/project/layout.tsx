import { FC, ReactNode } from "react";
import { ProjectList } from "./project_list";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  return (
    <main className="flex gap-4">
      <ProjectList />
      <article>{children}</article>
    </main>
  );
};

export default ProjectLayout;
