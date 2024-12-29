import { Tile } from "@/components/atom/tile";
import { ProjectCard } from "@/components/molecule/project_card";
import { getAllProjects } from "@/services/get-all-projects";
import { FC } from "react";

const ProjectOverviewPage: FC = async () => {
  const allProjects = await getAllProjects();
  return (
    <>
      {allProjects.map(({ frontmatter }, idx) => (
        <Tile
          key={frontmatter.slug}
          size={idx % 3 == 0 ? "box-md" : "square-md"}
        >
          <ProjectCard project={frontmatter} asLink />
        </Tile>
      ))}
    </>
  );
};

export default ProjectOverviewPage;
