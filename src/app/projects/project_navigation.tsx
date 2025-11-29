"use client";
import type { FC } from "react";
import { Badge } from "@/components/atom/badge";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import { NavListItem } from "@/components/molecule/nav_list_item";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/Project";

interface ProjectNavigationProps {
  projects: typeof Project.Array.Encoded;
  className?: string;
}
export const ProjectNavigation: FC<ProjectNavigationProps> = ({
  projects,
  className,
}) => {
  return (
    <NavigationMenu
      aria-label="Project Navigation"
      orientation="vertical"
      className="contents"
    >
      <NavigationMenuList className="contents">
        <NavListItem
          href="/projects"
          exact
          className={cn("col-span-full row-span-2 border", className)}
        >
          <span className="w-full text-center">All Projects</span>
        </NavListItem>
        {projects
          .filter((d) => d.isPublished)
          .map((p) => (
            <NavListItem
              key={p.slug}
              href={p.pathname}
              className={cn("col-span-full", className)}
            >
              <Badge variant="outline">{p.id}</Badge>
              <span className="hidden lg:line-clamp-1">{p.title}</span>
            </NavListItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
