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
} from "../atom/card";
import { formatDate } from "@/lib/format";
import { Github } from "lucide-react";
import { Button } from "../atom/button";
import { Badge } from "../atom/badge";
import { usePathname } from "next/navigation";
import { Tile } from "../atom/tile";

interface LabInfoCardProps {
  labs: Array<Lab>;
  className?: string;
}

export const LabInfoCard: FC<LabInfoCardProps> = ({ labs, className }) => {
  const pathName = usePathname();
  const lab = labs.find((l) => l.pathname === pathName);

  if (!lab) {
    return null;
  }
  return (
    <Tile size="unset" className="col-span-full">
      <Card className={className}>
        <CardHeader className="flex-row justify-between pb-0">
          <div className="flex items-center gap-2 opacity-60">
            {lab.tags?.map((t) => (
              <Badge key={t} variant="outline">
                {t.toUpperCase()}
              </Badge>
            ))}
          </div>
          <CardDescription>{formatDate(new Date(lab.date))}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="flex gap-2">{lab.title}</CardTitle>
          <CardDescription>{lab.description}</CardDescription>
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="outline" asChild>
            <a
              target="_blank"
              href={`https://github.com/lloydrichards/lloyd-portfolio/tree/master/src/content/${lab.pathname}`}
              className="flex gap-2 no-underline"
            >
              <Github /> Source
            </a>
          </Button>
        </CardFooter>
      </Card>
    </Tile>
  );
};
