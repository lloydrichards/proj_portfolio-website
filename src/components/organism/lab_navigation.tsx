"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";
import { Lab } from "@/types/domain";
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

interface LabNavigationProps {
  labs: Array<Lab>;
  className?: string;
}
export const LabNavigation: FC<LabNavigationProps> = ({ labs, className }) => {
  return (
    <aside className="hidden md:contents">
      <NavigationMenu aria-label="Lab Navigation" orientation="vertical">
        <NavigationMenuList className="contents">
          <LabNavItem href="/Labs" exact className={className}>
            All Labs
          </LabNavItem>

          {labs
            .filter((d) => d.isPublished)
            .map((p) => (
              <LabNavItem
                key={p.slug}
                href={p.pathname}
                className={cn("overflow-visible", className)}
              >
                {p.id}
                <span className="hidden lg:line-clamp-1"> - {p.title}</span>
              </LabNavItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
      {labs.length % 2 == 0 ? (
        <Tile size="box-xxs" outline={false} className={className} />
      ) : null}
    </aside>
  );
};

const LabNavItem: FC<{
  children: ReactNode;
  href: string;
  exact?: boolean;
  className?: string;
}> = ({ children, href, exact, className }) => {
  const pathname = usePathname();
  return (
    <Tile key={href} size="box-xxs" outline={false} className={className}>
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
