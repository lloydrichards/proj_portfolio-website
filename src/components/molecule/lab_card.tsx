"use client";

import { cva } from "class-variance-authority";
import { ExternalLink, FlaskConical } from "lucide-react";
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
import { cn } from "@/lib/utils";
import type { Lab } from "@/types/Lab";
import { Button } from "../atom/button";
import SvgGithub from "../icons/github";

type LabCardProps = {
  lab: typeof Lab.Encoded;
  className?: string;
  asLink?: boolean;
  expandable?: boolean;
};

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

export const LabCard: React.FC<LabCardProps> = ({
  lab,
  className,
  asLink,
  expandable = false,
}) => {
  const isDev = process.env.NODE_ENV === "development";

  const content = (
    <Card
      className={cardVariant({
        className,
        status: isDev ? lab.status : "published",
      })}
      style={
        expandable
          ? undefined
          : { containerType: "size", containerName: "tile" }
      }
    >
      {/* --- Title + date + tags (always visible) --- */}
      <CardHeader className="z-10 flex-1 justify-center px-4 transition-[flex] duration-250 ease-[cubic-bezier(0.2,0,0,1)] tile-tall:flex-none tile-tall:justify-start tile-tall:px-3 @sm/tile:flex-none @sm/tile:justify-start @sm/tile:px-3">
        <CardTitle className="line-clamp-3 tile-tall:line-clamp-1 @sm/tile:line-clamp-2">
          {asLink ? (
            lab.title
          ) : (
            <Link href={lab.pathname} className="hover:underline rounded-sm">
              {lab.title}
            </Link>
          )}
        </CardTitle>
        <time className="text-muted-foreground text-xs">
          {formatDate(new Date(lab.date))}
        </time>
        {lab.tags && lab.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {lab.tags.map((t) => (
              <Badge key={t} variant="outline" className="text-[10px]">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      {/* --- Expandable content (description) --- */}
      <div className="z-10 tile-reveal tile-tall:tile-reveal-visible @sm/tile:tile-reveal-visible">
        <div className="flex min-h-0 flex-col overflow-hidden">
          <CardDescription className="min-h-0 flex-1 overflow-hidden px-3 pt-1 mask-[linear-gradient(to_bottom,black_calc(100%-1.5rem),transparent)] @lg/tile:mask-none">
            {lab.description}
          </CardDescription>
        </div>
      </div>

      {/* --- Footer: links + expand trigger --- */}
      <CardFooter className="z-10 mt-auto shrink-0 flex-wrap gap-1">
        {/* External links: only at expanded state */}
        <span className="tile-reveal @sm/tile:tile-reveal-inline">
          <span className="inline-flex gap-1 overflow-hidden">
            {lab.repo && (
              <Button
                variant="ghost"
                size="icon-xs"
                render={<a target="_blank" href={lab.repo} rel="noopener" />}
              >
                <SvgGithub />
              </Button>
            )}
            {lab.href && (
              <Button
                variant="ghost"
                size="icon-xs"
                render={<a target="_blank" href={lab.href} rel="noopener" />}
              >
                <ExternalLink />
              </Button>
            )}
            {!asLink && (
              <Button
                variant="link"
                size="sm"
                render={<Link href={lab.pathname} />}
              >
                Read More
              </Button>
            )}
          </span>
        </span>
      </CardFooter>

      {/* --- Expand trigger (top right, consistent position) --- */}
      {expandable && (
        <TileExpandButton className="absolute top-1 right-1 z-20" />
      )}

      {/* --- Flask icon overlay (compact only) --- */}
      <div
        className="absolute top-8 right-3 flex items-center text-secondary opacity-30 blur-xs tile-tall:hidden @sm/tile:hidden"
        aria-hidden="true"
      >
        <FlaskConical className="size-7" />
      </div>
    </Card>
  );

  return asLink ? (
    <Link
      href={lab.pathname}
      className={cn("rounded-sm no-underline", className)}
      prefetch={false}
    >
      {content}
    </Link>
  ) : (
    content
  );
};
