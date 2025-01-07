import { FC } from "react";
import { Project } from "@/types/domain";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import { NavListItem } from "@/components/molecule/nav_list_item";
import { Badge } from "@/components/atom/badge";
import { cn } from "@/lib/utils";
import { NavToggleItem } from "@/components/molecule/nav_toggle_item";

interface ProjectNavigationProps {
  projects: Array<Project>;
  className?: string;
}
export const ProjectNavigation: FC<ProjectNavigationProps> = ({
  projects,
  className,
}) => {
  const categoryRoutes = [
    { category: "DEVELOP", label: "Develop" },
    { category: "DESIGN", label: "Design" },
    { category: "GARDEN", label: "Garden" },
  ];

  return (
    <NavigationMenu
      aria-label="Project Navigation"
      orientation="vertical"
      className="hidden md:contents"
    >
      <NavigationMenuList className="contents">
        <NavToggleItem href="/projects" className={className}>
          All
        </NavToggleItem>
        {categoryRoutes.map(({ category, label }) => (
          <NavToggleItem
            key={category}
            href={{ pathname: "/projects", query: { category } }}
            className={className}
          >
            {label}
          </NavToggleItem>
        ))}

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
