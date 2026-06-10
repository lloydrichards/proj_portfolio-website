import { Effect, Schema } from "effect";
import { ExpandableTile } from "@/components/atom/expandable-tile";
import { ProjectCard } from "@/components/molecule/project_card";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Project } from "@/types/Project";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "A collection of projects I've worked on.",
});

const ProjectOverviewPage = async () => {
  const visibleProjects = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* Portfolio;
      return yield* svc.visible;
    }).pipe(Effect.andThen(Schema.encodeEffect(Project.Array))),
  );

  return (
    <article className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      <h1
        className={typefaceHeading1(
          "col-span-full row-span-2 flex items-center",
        )}
      >
        Project Grid
      </h1>
      {visibleProjects.map((project) => (
        <ExpandableTile key={project.slug} sizes={["square-md", "square-lg"]}>
          <ProjectCard project={project} />
        </ExpandableTile>
      ))}
    </article>
  );
};

export default ProjectOverviewPage;
