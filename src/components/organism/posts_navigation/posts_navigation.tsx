"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu/navigation-menu";
import { cn } from "@/lib/utils";
import { Blog, Lab } from "@generated";
import Link from "next/link";
import { FC } from "react";
import { PostListItem } from "../../molecule/post_list_item/post_list_item";

interface PostsNavigationProps {
  allPosts: Array<Lab | Blog>;
  className?: string;
}
export const PostsNavigation: FC<PostsNavigationProps> = ({
  allPosts,
  className,
}) => {
  return (
    <NavigationMenu
      orientation="vertical"
      className={cn("flex-col items-start justify-start gap-4", className)}
    >
      <Link href={"/posts"}>
        <h1 className="text-lg">All Posts</h1>
      </Link>
      <NavigationMenuList className="flex-col items-start space-x-0">
        {allPosts
          .filter((d) => d.published)
          .map((post) => (
            <PostListItem key={post.slugAsParams} post={post}></PostListItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
