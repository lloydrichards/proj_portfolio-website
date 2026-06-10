"use client";

import { cva } from "class-variance-authority";
import { ExternalLink, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/atom/badge";
import {
  Card,
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
  "group relative flex h-full flex-col hover:shadow-sm dark:hover:shadow-none",
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
      {/* --- Title + date (always visible) --- */}
      <CardHeader className="z-10 flex-1 justify-center px-4 transition-[flex] duration-250 ease-[cubic-bezier(0.2,0,0,1)] tile-tall:flex-none tile-tall:justify-start tile-tall:px-3 @sm/tile:flex-none @sm/tile:justify-start @sm/tile:px-3">
        <CardTitle className="line-clamp-3 tile-tall:line-clamp-1 @sm/tile:line-clamp-2">
          <Link href={project.pathname} className="hover:underline rounded-sm">
            {project.title}
          </Link>
        </CardTitle>
        <time className="text-muted-foreground text-xs">
          {formatDate(new Date(project.date))}
        </time>
      </CardHeader>

      {/* --- Expandable content (awards, description) --- */}
      <div className="z-10 tile-reveal tile-tall:tile-reveal-visible @sm/tile:tile-reveal-visible">
        <div className="flex min-h-0 flex-col overflow-hidden">
          {project.awards && project.awards.length > 0 && (
            <ul className="shrink-0 space-y-1 px-3 text-xs">
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

          <CardDescription className="min-h-0 flex-1 overflow-hidden px-3 mask-[linear-gradient(to_bottom,black_calc(100%-1.5rem),transparent)] @lg/tile:mask-none">
            {project.description}
          </CardDescription>
        </div>
      </div>

      {/* --- Footer: tags + expand trigger, pinned to bottom --- */}
      <CardFooter className="z-10 mt-auto shrink-0 flex-wrap gap-1">
        {project.category.map((category) => (
          <Badge variant="outline" key={`${project.slug}-${category}`}>
            {category}
          </Badge>
        ))}

        {/* External links: only at expanded state */}
        <span className="inline-flex gap-1 overflow-hidden">
          {project.repo && (
            <Button
              variant="ghost"
              size="icon-xs"
              render={<a target="_blank" href={project.repo} rel="noopener" />}
            >
              <SvgGithub />
            </Button>
          )}
          {project.href && (
            <Button
              variant="ghost"
              size="icon-xs"
              render={<a target="_blank" href={project.href} rel="noopener" />}
            >
              <ExternalLink />
            </Button>
          )}
        </span>
      </CardFooter>

      {/* --- Expand trigger (top right, consistent position) --- */}
      <TileExpandButton className="absolute top-1 right-1 z-20" />

      {/* --- Awards overlay (compact only) --- */}
      {project.awards && project.awards.length > 0 && (
        <div
          className="absolute top-8 right-3 flex items-center text-secondary blur-xs tile-tall:hidden @sm/tile:hidden"
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
