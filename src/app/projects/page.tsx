import { Tile } from "@/components/atom/tile";
import { ProjectCard } from "@/components/molecule/project_card";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";
import { api } from "@/services/api";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "A collection of projects I've worked on.",
});

const ProjectOverviewPage = async () => {
  const allProjects = await api.projects.fetchAllProjects();
  return (
    <article className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      <h1
        className={typefaceHeading1(
          "col-span-full row-span-2 flex items-center",
        )}
      >
        Project Grid
      </h1>
      {allProjects.map((project, idx) => (
        <Tile key={project.slug} size={idx % 3 == 0 ? "box-md" : "square-md"}>
          <ProjectCard project={project} asLink />
        </Tile>
      ))}
    </article>
  );
};

export default ProjectOverviewPage;
