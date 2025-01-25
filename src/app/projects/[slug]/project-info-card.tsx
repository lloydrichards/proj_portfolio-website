import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atom/accordion";
import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Tile } from "@/components/atom/tile";
import { TeamMemberAvatar } from "@/components/molecule/team_member_avatar";
import { formatDate } from "@/lib/format";
import { TeamMember } from "@/services/db/schema/team_member";
import { Project } from "@/types/domain";
import { Github } from "lucide-react";
import { FC } from "react";

interface ProjectInfoCardProps {
  project: Project;
  team: TeamMember[];
  className?: string;
}

export const ProjectInfoCard: FC<ProjectInfoCardProps> = ({
  project,
  team,
  className,
}) => {
  return (
    <Tile size="unset" className="col-span-full">
      <Card className={className}>
        <CardHeader className="flex-row justify-between pb-3">
          <div className="flex items-center gap-1 opacity-60">
            {project.category?.map((t) => (
              <Badge key={t} variant="outline">
                <h1>{t.toUpperCase()}</h1>
              </Badge>
            ))}
          </div>
          {formatDate(new Date(project.date))}
        </CardHeader>
        <CardContent>
          <CardTitle className="flex gap-2">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          {project.team && project.team.length > 0 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Team</AccordionTrigger>
                <AccordionContent>
                  {team.map((t) => (
                    <TeamMemberAvatar key={t.id} {...t} />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </CardContent>
        <CardFooter className="justify-end">
          {project.repo && (
            <Button variant="outline" asChild>
              <a target="_blank" href={project.repo}>
                <Github /> Repo
              </a>
            </Button>
          )}
          {project.href && (
            <Button variant="outline" asChild>
              <a target="_blank" href={project.href}>
                Website
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Tile>
  );
};
