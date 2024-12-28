"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { NavListItem } from "../molecule/nav_list_item";
import { Project } from "@/types/domain";

interface ProjectNavigationProps {
  projects: Array<Project>;
  className?: string;
}
export const ProjectNavigation: FC<ProjectNavigationProps> = ({
  projects,
  className,
}) => {
  return (
    <NavigationMenu
      orientation="vertical"
      className={cn("flex-col items-start justify-start gap-4", className)}
    >
      <Link href={"/lab"}>
        <h1 className="text-lg">All Posts</h1>
      </Link>
      <NavigationMenuList className="flex-col items-start space-x-0">
        {projects
          .filter((d) => d.isPublished)
          .map((p) => (
            <NavListItem key={p.slug} href={p.pathname}>
              <span className="flex-1">{p.title}</span>
            </NavListItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
