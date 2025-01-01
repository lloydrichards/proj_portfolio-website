"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/atom/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { Tile } from "../atom/tile";

export const NavListItem: FC<{
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
              className: "flex gap-2 @min-[120px]:justify-start",
            })}
          >
            {children}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </Tile>
  );
};
