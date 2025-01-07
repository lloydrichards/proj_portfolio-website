import { FC } from "react";
import { Project } from "@/types/domain";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import { NavListItem } from "@/components/molecule/nav_list_item";
import { Badge } from "@/components/atom/badge";

interface ProjectNavigationProps {
  projects: Array<Project>;
  className?: string;
}
export const ProjectNavigation: FC<ProjectNavigationProps> = ({
  projects,
  className,
}) => {
  return (
    <aside className="hidden md:contents">
      <NavigationMenu aria-label="Project Navigation" orientation="vertical">
        <NavigationMenuList className="contents">
          <NavListItem href="/projects" exact className={className}>
            All Projects
          </NavListItem>

          {projects
            .filter((d) => d.isPublished)
            .map((p) => (
              <NavListItem key={p.slug} href={p.pathname} className={className}>
                <Badge variant="outline">{p.id}</Badge>
                <span className="hidden lg:line-clamp-1">{p.title}</span>
              </NavListItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};
