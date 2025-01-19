"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/atom/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { tileVariants } from "../atom/tile";
import { Url } from "next/dist/shared/lib/router/router";

export const NavListItem: FC<{
  children: ReactNode;
  href: Url;
  exact?: boolean;
  className?: string;
}> = ({ children, href, exact, className }) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem
      className={tileVariants({ size: "unset", outline: false, className })}
    >
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle({
            active: exact
              ? pathname == href
              : pathname.includes(href.toString()),
            className: "flex gap-2 @min-[120px]:justify-start",
          })}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
