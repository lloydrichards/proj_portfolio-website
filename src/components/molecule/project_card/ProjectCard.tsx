import { Badge } from "@/components/atom/badge/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card/card";
import { Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export interface IProjectCard {
  project: Project;
}

export const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  return (
    <Link
      href={project.slug}
      className="not-prose rounded no-underline dark:prose-invert "
    >
      <Card className="relative flex h-full flex-col text-clip hover:shadow">
        {!!project.image && (
          <div className="absolute z-0 size-full opacity-20 ">
            <Image
              className="object-cover blur-sm grayscale hover:blur-0 hover:grayscale-0"
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
        <CardFooter className="x-10 pointer-events-none justify-end gap-1">
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
