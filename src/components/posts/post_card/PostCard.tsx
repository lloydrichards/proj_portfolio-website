import { formatDate } from "@/lib/format";
import { Blog, Lab } from "contentlayer/generated";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface IPostCard {
  post: Blog | Lab;
}

export const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <motion.div
      layout
      key={post.slugAsParams}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      className="not-prose rounded-lg shadow-md dark:prose-invert"
    >
      <Link href={post.slug} className="no-underline">
        <Card className="flex h-full flex-col">
          <CardHeader className="flex-1 gap-2">
            <div className="flex justify-between">
              <Badge variant="outline">{post.type}</Badge>
              <p className="text-sm text-muted-foreground">
                {formatDate(new Date(post.date))}
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
    </motion.div>
  );
};
