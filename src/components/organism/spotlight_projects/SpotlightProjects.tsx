import { allProjects } from "../../../../.contentlayer/generated";
import { ProjectCard } from "../../molecule/project_card/ProjectCard";

export const SpotlightProjects: React.FC = () => {
  const sortedProjects = allProjects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((d) => d.published);
  return (
    <section className="prose dark:prose-invert">
      <h1 className="text-lg">Spotlight Project</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects
          .filter((d) => d.spotlight)
          .map((project) => (
            <ProjectCard key={project.slugAsParams} project={project} />
          ))}
      </div>
    </section>
  );
};
