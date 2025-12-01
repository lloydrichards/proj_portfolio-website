"use client";
import {
  ChevronsLeft,
  ChevronsRight,
  CodeXml,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
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
import Github from "@/components/icons/github";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Lab } from "@/types/Lab";

interface LabInfoCardProps {
  labs: typeof Lab.Array.Encoded;
  className?: string;
}

export const LabInfoCard: FC<LabInfoCardProps> = ({ labs, className }) => {
  const pathname = usePathname();
  const lab = labs.find((l) => l.pathname === pathname);

  if (!lab) {
    return null;
  }

  // Access control based on status
  if (process.env.NODE_ENV === "production") {
    if (lab.status === "draft") {
      return null; // Drafts never accessible in production
    }
  }

  const prevLab = labs[labs.indexOf(lab) + 1];
  const nextLab = labs[labs.indexOf(lab) - 1];

  const relatedLabs = labs
    .filter((l) => l.slug !== lab.slug)
    .filter((l) => l.tags.some((t) => lab.tags.includes(t)));

  const isDev = process.env.NODE_ENV === "development";
  const showStatusBanner =
    lab.status === "unpublished" || (isDev && lab.status === "draft");

  return (
    <>
      {showStatusBanner && (
        <Tile size="unset" className="col-span-full">
          <div
            className={cn(
              "p-4 rounded-md text-center font-semibold",
              lab.status === "draft" && "bg-yellow-500/20 border-yellow-500",
              lab.status === "unpublished" &&
                "bg-orange-500/20 border-orange-500",
            )}
          >
            {lab.status === "draft" && "DRAFT - Only visible in development"}
            {lab.status === "unpublished" &&
              "UNPUBLISHED - Hidden from lists in production"}
          </div>
        </Tile>
      )}
      <Tile size="unset" className="col-span-full">
        <Card className={className}>
          <CardHeader className="flex-row justify-between pb-0">
            <div className="flex items-center gap-1 opacity-60">
              {lab.tags?.map((t) => (
                <Badge key={t} variant="outline">
                  <h1>{t.toUpperCase()}</h1>
                </Badge>
              ))}
            </div>
            {formatDate(new Date(lab.date))}
          </CardHeader>
          <CardContent>
            <CardTitle className="flex gap-2">{lab.title}</CardTitle>
            <CardDescription>{lab.description}</CardDescription>
            {(lab.repo || lab.href) && (
              <div className="mt-3 flex justify-end gap-1">
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
            )}
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
                          {l.title} ({formatDate(new Date(l.date))})
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
    </>
  );
};

const InfoFooter: FC<{
  currentLab: typeof Lab.Encoded;
  prevLab: typeof Lab.Encoded | undefined;
  nextLab: typeof Lab.Encoded | undefined;
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
