"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";
import { Project } from "@/types/domain";
import { cva } from "class-variance-authority";
import { usePathname } from "next/navigation";

interface ProjectNavigationProps {
  projects: Array<Project>;
  className?: string;
}
export const ProjectNavigation: FC<ProjectNavigationProps> = ({
  projects,
  className,
}) => {
  return (
    <nav className="hidden md:contents">
      <ProjectNavItem href="/project" exact className={className}>
        All Projects
      </ProjectNavItem>
      {projects
        .filter((d) => d.isPublished)
        .map((p) => (
          <ProjectNavItem key={p.slug} href={p.pathname} className={className}>
            {p.id}
            <span className="hidden lg:line-clamp-1"> - {p.title}</span>
          </ProjectNavItem>
        ))}
      {projects.length % 2 == 0 ? <div className={className} /> : null}
    </nav>
  );
};

const navLinkVariant = cva(
  "flex size-full items-center justify-center rounded-md",
  {
    variants: {
      active: {
        true: "bg-accent-foreground/50 text-accent",
        false:
          "bg-accent-foreground/10 hover:bg-accent-foreground/20 hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

const ProjectNavItem: FC<{
  children: ReactNode;
  href: string;
  exact?: boolean;
  className?: string;
}> = ({ children, href, exact, className }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={navLinkVariant({
        active: exact ? pathname == href : pathname.includes(href),
        className,
      })}
    >
      {children}
    </Link>
  );
};
