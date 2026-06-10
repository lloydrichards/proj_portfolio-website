"use client";

import { cva } from "class-variance-authority";
import { ExternalLink, Trophy } from "lucide-react";
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
import { TileExpandButton } from "@/components/atom/tile-expand-button";
import { formatDate } from "@/lib/format";
import type { Project } from "@/types/Project";
import { Button } from "../atom/button";
import SvgGithub from "../icons/github";

interface IProjectCard {
  project: typeof Project.Encoded;
  className?: string;
}

const cardVariant = cva(
  "group relative flex h-full flex-col text-clip hover:shadow-sm dark:hover:shadow-none",
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

export const ProjectCard: React.FC<IProjectCard> = ({ project, className }) => {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <Card
      className={cardVariant({
        className,
        status: isDev ? project.status : "published",
      })}
    >
      {/* --- Title --- */}
      <CardHeader className="z-10 flex-1 justify-center px-4 tile-tall:flex-none tile-tall:justify-start tile-tall:px-3 @sm/tile:flex-none @sm/tile:justify-start @sm/tile:px-3">
        <CardTitle className="line-clamp-3 tile-tall:line-clamp-1 @sm/tile:line-clamp-2">
          <Link href={project.pathname} className="hover:underline">
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>

      {/* --- Date --- */}
      <div className="text-muted-foreground z-10 hidden shrink-0 px-3 text-xs tile-tall:block @sm/tile:block">
        {formatDate(new Date(project.date))}
      </div>

      {/* --- Awards --- */}
      {project.awards && project.awards.length > 0 && (
        <ul className="z-10 mt-1 hidden shrink-0 space-y-0.5 px-3 text-xs tile-tall:block @sm/tile:block">
          {project.awards.map((award) => (
            <li
              key={`${award.award}-${award.result}`}
              className="text-muted-foreground flex items-center gap-1.5"
            >
              <Trophy className="text-secondary size-3 shrink-0" />
              <span className="truncate">
                {award.award}: {award.result}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* --- Description: grows to fill, clips with fade --- */}
      <CardContent className="z-10 hidden min-h-0 flex-1 overflow-hidden tile-tall:block @sm/tile:block mask-[linear-gradient(to_bottom,black_calc(100%-1.5rem),transparent)] @lg/tile:mask-none">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>

      {/* --- Footer: tags + expand trigger, pinned to bottom --- */}
      <CardFooter className="z-10 shrink-0 flex-wrap gap-1">
        {project.category.map((category) => (
          <Badge variant="outline" key={`${project.slug}-${category}`}>
            {category}
          </Badge>
        ))}

        {/* External links: only at wide expanded state */}
        {project.repo && (
          <Button
            variant="ghost"
            size="icon-xs"
            className="hidden @sm/tile:inline-flex"
            render={<a target="_blank" href={project.repo} rel="noopener" />}
          >
            <SvgGithub />
          </Button>
        )}
        {project.href && (
          <Button
            variant="ghost"
            size="icon-xs"
            className="hidden @sm/tile:inline-flex"
            render={<a target="_blank" href={project.href} rel="noopener" />}
          >
            <ExternalLink />
          </Button>
        )}

        <div className="flex grow justify-end">
          <TileTrigger render={<Button variant="ghost" size="icon-sm" />}>
            <span className="group-aria-expanded/button:hidden">
              <Maximize2 />
            </span>
            <span className="hidden group-aria-expanded/button:inline">
              <Minimize2 />
            </span>
          </TileTrigger>
        </div>
      </CardFooter>

      {/* --- Awards overlay (compact only) --- */}
      {project.awards && project.awards.length > 0 && (
        <div
          className="absolute top-3 right-3 flex items-center text-secondary blur-xs tile-tall:hidden @sm/tile:hidden"
          title="Award Winning Project"
        >
          <Trophy className="size-8" />
        </div>
      )}

      {/* --- Background image --- */}
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
};
