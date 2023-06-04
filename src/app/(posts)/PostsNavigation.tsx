"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Blog, Lab } from "contentlayer/generated";
import Link from "next/link";
import { FC } from "react";
import { ImLab } from "react-icons/im";
import { FiMic } from "react-icons/fi";
import { formatDate } from "@/lib/format";

interface PostsListItemProps {
  post: Lab | Blog;
  className?: string;
}
const PostListItem: FC<PostsListItemProps> = ({ post, className }) => {
  return (
    <NavigationMenuItem>
      <Link href={post.slug} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "w-full gap-2")}
        >
          <PostIcon type={post.type} />
          <h4 className="line-clamp-1 flex-1 overflow-clip">{post.title}</h4>
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
const PostIcon: FC<PostIconProps> = ({ type, className }) => {
  switch (type) {
    case "Lab":
      return <ImLab size={24} />;
    case "Blog":
      return <FiMic size={24} />;
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
      className={cn(
        "flex-col items-start justify-start gap-4",
        className
      )}
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
