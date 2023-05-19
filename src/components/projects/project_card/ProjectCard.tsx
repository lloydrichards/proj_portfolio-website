import { formatDate } from "@/lib/format";
import { Project } from "contentlayer/generated";
import Link from "next/link";

export interface IProjectCard {
  project: Project;
}

export const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  return (
    <Link
      href={project.slug}
      className="not-prose card image-full no-underline shadow-md hover:shadow-lg"
    >
      {!!project.image && (
        <figure>
          <img src={project.image} alt={project.title} />
        </figure>
      )}
      <div className="card-body">
        <div className="card-actions">
          {project.category.map((category) => (
            <div
              key={`${project.slug}-${category}`}
              className="badge-outline badge"
            >
              {category}
            </div>
          ))}
        </div>
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="text-right">{formatDate(new Date(project.date))}</div>
      </div>
    </Link>
  );
};
