"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/atom/navigation-menu";
import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { tileVariants } from "../atom/tile";

export const NavListItem: FC<{
  children: ReactNode;
  href: Url;
  exact?: boolean;
  className?: string;
}> = ({ children, href, exact, className }) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem
      className={tileVariants({
        size: "unset",
        outline: false,
        className: cn("overflow-visible", className),
      })}
    >
      <NavigationMenuLink
        className={navigationMenuTriggerStyle({
          active: exact ? pathname == href : pathname.includes(href.toString()),
          className: "flex gap-2 lg:justify-start",
        })}
        asChild
      >
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
