import { Effect, Schema } from "effect";
import type { FC, ReactNode } from "react";
import { Mosaic } from "@/components/template/mosaic";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Project } from "@/types/Project";
import { ProjectNavigation } from "./project_navigation";

const ProjectLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  const allProjects = await RuntimeServer.runPromise(
    Portfolio.all.pipe(Effect.andThen(Schema.encode(Project.Array))),
  );

  return (
    <Mosaic sidebar>
      <ProjectNavigation
        projects={allProjects.filter((d) => d.status === "published")}
      />
      {children}
    </Mosaic>
  );
};

export default ProjectLayout;
