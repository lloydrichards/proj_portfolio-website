"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
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
  onClick?: () => void;
}
export const PostListItem: FC<PostsListItemProps> = ({ post, onClick }) => {
  return (
    <NavigationMenuItem>
      <Link href={post.slug} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "w-full gap-2")}
          onClick={onClick}
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
