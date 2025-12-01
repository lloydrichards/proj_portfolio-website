"use client";
import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";
import { Badge } from "@/components/atom/badge";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atom/select";
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
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <NavigationMenu
        aria-label="Project Navigation"
        orientation="vertical"
        className="contents"
      >
        <NavigationMenuList className="contents">
          <NavListItem
            href="/projects"
            exact
            className={cn(
              "col-span-1 md:col-span-full md:row-span-2 border",
              className,
            )}
          >
            <span className="w-full text-center">All Projects</span>
          </NavListItem>
          {projects.map((p) => (
            <NavListItem
              key={p.slug}
              href={p.pathname}
              className={cn(
                "col-span-full overflow-visible hidden md:block",
                className,
              )}
            >
              <Badge variant="outline">{p.id}</Badge>
              <span className="hidden lg:line-clamp-1">{p.title}</span>
            </NavListItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Select
        defaultValue={
          pathname === "/projects" ? "" : pathname.split("/projects/")[1]
        }
        onValueChange={(value) => router.push(`/projects/${value}`)}
      >
        <SelectTrigger className="h-full border-border col-span-7 md:hidden">
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((p) => (
            <SelectItem key={p.slug} value={p.slug}>
              <Badge variant="outline" className="mr-2">
                {p.id}
              </Badge>
              {p.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
