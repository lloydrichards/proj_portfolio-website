"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/atom/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface PostsListItemProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export const NavListItem: FC<PostsListItemProps> = ({ children, href }) => {
  return (
    <NavigationMenuItem className="w-full">
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "group w-full gap-1")}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
