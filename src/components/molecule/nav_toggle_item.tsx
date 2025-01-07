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
import { Url } from "next/dist/shared/lib/router/router";

export const NavToggleItem: FC<{
  children: ReactNode;
  href: Url;
  size?: "box-xxs" | "square-xxs";
  className?: string;
}> = ({ children, href, size = "box-xxs", className }) => {
  const pathname = usePathname();
  return (
    <Tile
      key={href.toString()}
      size={size}
      outline={false}
      className={className}
    >
      <NavigationMenuItem>
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
    </Tile>
  );
};
