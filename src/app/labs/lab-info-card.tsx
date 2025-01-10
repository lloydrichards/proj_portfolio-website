"use client";
import { Lab } from "@/types/domain";
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
import Github from "@/components/icons/github";
import { Button } from "@/components/atom/button";
import { Badge } from "@/components/atom/badge";
import { usePathname } from "next/navigation";
import { Tile } from "@/components/atom/tile";

interface LabInfoCardProps {
  labs: Array<Lab>;
  className?: string;
}

export const LabInfoCard: FC<LabInfoCardProps> = ({ labs, className }) => {
  const pathname = usePathname();
  const lab = labs.find((l) => l.pathname === pathname);

  if (!lab) {
    return null;
  }

  return (
    <Tile size="unset" className="col-span-full">
      <Card className={className}>
        <CardHeader className="flex-row justify-between pb-0">
          <div className="flex items-center gap-1 opacity-60">
            {lab.tags?.map((t) => (
              <Badge key={t} variant="outline">
                {t.toUpperCase()}
              </Badge>
            ))}
          </div>
          {formatDate(new Date(lab.date))}
        </CardHeader>
        <CardContent>
          <CardTitle className="flex gap-2">{lab.title}</CardTitle>
          <CardDescription>{lab.description}</CardDescription>
        </CardContent>
        <CardFooter className="justify-end">
          {lab.href && (
            <Button variant="outline" asChild>
              <a target="_blank" href={lab.href}>
                View
              </a>
            </Button>
          )}
          {lab.repo && (
            <Button variant="outline" asChild>
              <a target="_blank" href={lab.repo}>
                <Github /> Repo
              </a>
            </Button>
          )}
          <Button variant="outline" asChild>
            <a
              target="_blank"
              href={`https://github.com/lloydrichards/lloyd-portfolio/tree/master/src/app/labs/(content)/${lab.slug}`}
            >
              <Github /> Source
            </a>
          </Button>
        </CardFooter>
      </Card>
    </Tile>
  );
};
