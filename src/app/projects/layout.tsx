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
    Effect.gen(function* () {
      const svc = yield* Portfolio;
      return yield* svc.all;
    }).pipe(Effect.andThen(Schema.encodeEffect(Project.Array))),
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
