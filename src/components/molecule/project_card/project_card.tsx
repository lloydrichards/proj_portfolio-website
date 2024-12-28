import { Badge } from "@/components/atom/badge/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card/card";
import { Project } from "@generated";
import Image from "next/image";
import Link from "next/link";

export interface IProjectCard {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard: React.FC<IProjectCard> = ({ project, onClick }) => {
  return (
    <Link
      href={project.slug}
      className="not-prose dark:prose-invert rounded-sm no-underline"
      onClick={onClick}
      data-testid="project-card"
    >
      <Card className="relative flex h-full flex-col text-clip hover:shadow-sm">
        {!!project.image && (
          <div className="absolute z-0 size-full opacity-20">
            <Image
              className="hover:blur-0 object-cover blur-xs grayscale hover:grayscale-0"
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader className="pointer-events-none z-10 flex-1">
          <CardTitle className="line-clamp-2">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="pointer-events-none z-10">
          <CardDescription className="line-clamp-3">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pointer-events-none justify-end gap-1 px-10">
          {project.category.map((category) => (
            <Badge variant="outline" key={`${project.slug}-${category}`}>
              {category}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};
