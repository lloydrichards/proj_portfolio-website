"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { NavListItem } from "../molecule/nav_list_item";
import { Lab } from "@/types/domain";
import { FlaskConical } from "lucide-react";

interface PostsNavigationProps {
  labs: Array<Lab>;
  className?: string;
}
export const LabNavigation: FC<PostsNavigationProps> = ({
  labs,
  className,
}) => {
  return (
    <NavigationMenu
      orientation="vertical"
      className={cn("flex-col items-start justify-start gap-4", className)}
    >
      <Link href={"/lab"}>
        <h1 className="text-lg">All Posts</h1>
      </Link>
      <NavigationMenuList className="flex-col items-start space-x-0">
        {labs
          .filter((d) => d.isPublished)
          .map((post) => (
            <NavListItem key={post.slug} href={post.pathname}>
              <FlaskConical size={16} />
              <span className="line-clamp-1 flex-1">{post.title}</span>
            </NavListItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
