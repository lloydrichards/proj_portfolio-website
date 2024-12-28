import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Badge } from "@/components/atom/badge";
import { Lab } from "@/types/domain";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export interface IPostCard {
  post: Lab;
  className?: string;
}

export const PostCard: React.FC<IPostCard> = ({ post, className }) => {
  return (
    <Link
      href={post.pathname}
      className={cn("rounded-sm no-underline shadow-md", className)}
      prefetch={false}
    >
      <Card className="flex h-full flex-col">
        <CardHeader className="flex-1 gap-2">
          <div className="flex justify-between">
            <Badge variant="outline">Lab</Badge>
            <p className="text-muted-foreground text-sm">
              {formatDate(post.date)}
            </p>
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">
            {post.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
