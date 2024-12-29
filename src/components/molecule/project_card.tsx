import { Badge } from "@/components/atom/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { cn } from "@/lib/utils";
import { Project } from "@/types/domain";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atom/button";

export interface IProjectCard {
  project: Project;
  className?: string;
  asLink?: boolean;
}

export const ProjectCard: React.FC<IProjectCard> = ({
  project,
  className,
  asLink,
}) => {
  const content = (
    <Card className="group relative flex h-full flex-col text-clip hover:shadow-sm">
      <CardHeader className="z-10 flex-1">
        <CardTitle className="line-clamp-2">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="z-10">
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="z-10 justify-end gap-1">
        {project.category.map((category) => (
          <Badge
            variant="outline"
            className="hidden @min-sm:block"
            key={`${project.slug}-${category}`}
          >
            {category}
          </Badge>
        ))}
        <div className="flex grow justify-end">
          {asLink ? null : (
            <Button variant="link" size="sm" asChild>
              <Link href={project.pathname}>Read More</Link>
            </Button>
          )}
        </div>
      </CardFooter>
      {!!project.image && (
        <div className="absolute z-0 size-full opacity-20">
          <Image
            className="group-hover:blur-0 object-cover blur-xs grayscale group-hover:grayscale-0"
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </Card>
  );

  return asLink ? (
    <Link href={project.pathname} className={cn(className)}>
      {content}
    </Link>
  ) : (
    content
  );
};
