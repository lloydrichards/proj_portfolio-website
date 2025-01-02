import { Project } from "@/types/domain";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { formatDate } from "@/lib/format";
import { Github } from "lucide-react";
import { Button } from "@/components/atom/button";
import { Badge } from "@/components/atom/badge";
import { Tile } from "@/components/atom/tile";

interface ProjectInfoCardProps {
  project: Project;
  className?: string;
}

export const ProjectInfoCard: FC<ProjectInfoCardProps> = ({
  project,
  className,
}) => {
  return (
    <Tile size="unset" className="col-span-full">
      <Card className={className}>
        <CardHeader className="flex-row justify-between pb-0">
          <div className="flex items-center gap-2 opacity-60">
            {project.category?.map((t) => (
              <Badge key={t} variant="outline">
                {t.toUpperCase()}
              </Badge>
            ))}
          </div>
          <CardDescription>
            {formatDate(new Date(project.date))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="flex gap-2">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="justify-end">
          {project.repo && (
            <Button variant="outline" asChild>
              <a
                target="_blank"
                href={project.repo}
                className="flex gap-2 no-underline"
              >
                <Github /> Source
              </a>
            </Button>
          )}
          {project.href && (
            <Button variant="outline" asChild>
              <a target="_blank" href={project.href} className="no-underline">
                Website
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Tile>
  );
};
