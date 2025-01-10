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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atom/accordion";
import Link from "next/link";
import {
  ChevronsLeft,
  ChevronsRight,
  CodeXml,
  ExternalLink,
} from "lucide-react";

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

  const prevLab = labs[labs.indexOf(lab) + 1];
  const nextLab = labs[labs.indexOf(lab) - 1];

  const relatedLabs = labs
    .filter((l) => l.slug !== lab.slug)
    .filter((l) => l.tags.some((t) => lab.tags.includes(t)));

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
          <div className="flex justify-end gap-1">
            {lab.href && (
              <Button variant="outline" asChild>
                <a target="_blank" href={lab.href}>
                  <ExternalLink /> Website
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
          </div>
          {relatedLabs.length > 0 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Related Labs</AccordionTrigger>
                <AccordionContent className="gap-0">
                  {relatedLabs.map((l) => (
                    <Button
                      key={l.slug}
                      variant="link"
                      size="sm"
                      className="justify-start gap-2"
                      asChild
                    >
                      <Link href={l.pathname}>
                        <Badge variant="default">{l.id}</Badge>
                        {l.title} ({formatDate(l.date)})
                      </Link>
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </CardContent>
        <InfoFooter currentLab={lab} prevLab={prevLab} nextLab={nextLab} />
      </Card>
    </Tile>
  );
};

const InfoFooter: FC<{
  currentLab: Lab;
  prevLab: Lab | undefined;
  nextLab: Lab | undefined;
}> = ({ prevLab, nextLab, currentLab }) => {
  return (
    <CardFooter className="grid grid-cols-3">
      {prevLab ? (
        <Button
          variant="link"
          className="col-start-1 justify-start pl-0"
          asChild
        >
          <Link href={prevLab.pathname}>
            <ChevronsLeft />
            Preview
          </Link>
        </Button>
      ) : (
        <Button
          disabled
          variant="link"
          className="col-start-1 justify-start pl-0"
        >
          <ChevronsLeft />
          Preview
        </Button>
      )}
      <Button variant="link" className="text-foreground/65 col-start-2" asChild>
        <a
          target="_blank"
          href={`https://github.com/lloydrichards/lloyd-portfolio/tree/master/src/app/labs/(content)/${currentLab.slug}`}
        >
          <CodeXml />
          Source
        </a>
      </Button>
      {nextLab ? (
        <Button variant="link" className="col-start-3 justify-end pr-0" asChild>
          <Link href={nextLab.pathname}>
            Next
            <ChevronsRight />
          </Link>
        </Button>
      ) : (
        <Button
          disabled
          variant="link"
          className="col-start-3 justify-end pr-0"
        >
          Next
          <ChevronsRight />
        </Button>
      )}
    </CardFooter>
  );
};
