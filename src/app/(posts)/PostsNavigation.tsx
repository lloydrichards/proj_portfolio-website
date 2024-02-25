"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuList,
} from "@/components/atom/navigation-menu/navigation-menu";
import { cn } from "@/lib/utils";
import { Blog, Lab } from "@generated";
import Link from "next/link";
import { FC } from "react";
import { formatDate } from "@/lib/format";
import { FlaskConical, Mic } from "lucide-react";

interface PostsListItemProps {
  post: Lab | Blog;
  className?: string;
}
const PostListItem: FC<PostsListItemProps> = ({ post }) => {
  return (
    <NavigationMenuItem>
      <Link href={post.slug} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "w-full gap-2")}
        >
          <PostIcon type={post.type} />
          <h4 className="line-clamp-1 flex-1 text-clip">{post.title}</h4>
          <p className="text-sm">{formatDate(new Date(post.date))}</p>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

interface PostIconProps {
  type: "Lab" | "Blog";
  className?: string;
}
const PostIcon: FC<PostIconProps> = ({ type }) => {
  switch (type) {
    case "Lab":
      return <FlaskConical size={24} />;
    case "Blog":
      return <Mic size={24} />;
  }
};

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
