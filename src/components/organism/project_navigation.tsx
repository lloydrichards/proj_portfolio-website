"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";
import { Project } from "@/types/domain";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../atom/navigation-menu";
import { Tile } from "../atom/tile";
import { cn } from "@/lib/utils";

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
          <ProjectNavItem href="/projects" exact className={className}>
            All Projects
          </ProjectNavItem>

          {projects
            .filter((d) => d.isPublished)
            .map((p) => (
              <ProjectNavItem
                key={p.slug}
                href={p.pathname}
                className={className}
              >
                {p.id}
                <span className="hidden lg:line-clamp-1"> - {p.title}</span>
              </ProjectNavItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
      {projects.length % 2 == 0 ? (
        <Tile size="box-xxs" outline={false} className={className} />
      ) : null}
    </aside>
  );
};

const ProjectNavItem: FC<{
  children: ReactNode;
  href: string;
  exact?: boolean;
  className?: string;
}> = ({ children, href, exact, className }) => {
  const pathname = usePathname();
  return (
    <Tile
      key={href}
      size="box-xxs"
      outline={false}
      className={cn("overflow-visible", className)}
    >
      <NavigationMenuItem>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              active: exact ? pathname == href : pathname.includes(href),
              className: "@min-[120px]:justify-start",
            })}
          >
            {children}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </Tile>
  );
};
