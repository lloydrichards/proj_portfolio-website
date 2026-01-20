import { cva } from "class-variance-authority";
import { Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
import type { Project } from "@/types/Project";
import { Button } from "../atom/button";

interface IProjectCard {
  project: Project;
  className?: string;
  asLink?: boolean;
}

const cardVariant = cva(
  "group @container relative flex h-full flex-col text-clip hover:shadow-sm dark:hover:shadow-none",
  {
    variants: {
      status: {
        draft: "border-yellow-500 border-2",
        unpublished: "border-orange-500 border-2",
        published: "",
      },
    },
    defaultVariants: {
      status: "published",
    },
  },
);

export const ProjectCard: React.FC<IProjectCard> = ({
  project,
  className,
  asLink,
}) => {
  const isDev = process.env.NODE_ENV === "development";

  const content = (
    <Card
      className={cardVariant({
        className,
        status: isDev ? project.status : "published",
      })}
    >
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
      {project.awards && project.awards.length > 0 && (
        <div
          className="absolute blur-xs top-3 right-3 flex items-center text-secondary"
          title="Award Winning Project"
        >
          <Trophy className="size-10" />
        </div>
      )}
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
