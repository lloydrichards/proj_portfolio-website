import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/format";
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
      className="not-prose no-underline rounded hover:shadow"
    >
      <Card className="flex h-full flex-col">
        {/* {!!project.image && (
              <div className="h-full w-full opacity-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                />
              </div>
            )} */}
        <CardHeader className="flex-1">
          <CardTitle className="line-clamp-2">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="justify-end gap-1">
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
