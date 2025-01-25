import { Tile } from "@/components/atom/tile";
import { ProjectCard } from "@/components/molecule/project_card";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";
import { getAllProjects } from "@/services/api/get-all-projects";
import { categoryPredicate } from "@/services/api/project-helpers";
import { FC } from "react";

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
      <h1
        className={typefaceHeading1(
          "col-span-full row-span-2 flex items-center",
        )}
      >
        Project Grid
      </h1>
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
