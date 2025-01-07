import { Tile } from "@/components/atom/tile";
import { ProjectCard } from "@/components/molecule/project_card";
import { getAllProjects } from "@/services/get-all-projects";
import { FC } from "react";
import { createPageMetadata } from "@/lib/seo";
import { categoryPredicate } from "@/services/project-helpers";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "A collection of projects I've worked on.",
});

const ProjectOverviewPage: FC<{
  searchParams: Promise<{ [key: string]: string | undefined }>;
}> = async ({ searchParams }) => {
  const category = (await searchParams).category;
  const allProjects = await getAllProjects();
  return (
    <article className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      {allProjects
        .map(({ frontmatter }) => frontmatter)
        .filter(categoryPredicate({ category }))
        .map((project, idx) => (
          <Tile key={project.slug} size={idx % 3 == 0 ? "box-md" : "square-md"}>
            <ProjectCard project={project} asLink />
          </Tile>
        ))}
    </article>
  );
};

export default ProjectOverviewPage;
