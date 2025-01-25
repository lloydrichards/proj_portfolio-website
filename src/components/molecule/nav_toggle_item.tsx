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

export const NavToggleItem: FC<{
  children: ReactNode;
  href: Url;
  size?: "box-xxs" | "square-xxs";
  className?: string;
}> = ({ children, href, size = "box-xxs", className }) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem
      className={tileVariants({
        size,
        outline: false,
        className: cn("overflow-visible", className),
      })}
    >
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle({
            active: pathname == href,
            className: "flex gap-2 border @min-[120px]:justify-start",
          })}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
