import { formatDate } from "@/lib/format";
import { Blog, Lab } from "contentlayer/generated";
import Link from "next/link";
import { motion } from "framer-motion";

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
      exit={{ opacity: 0, x: -2000 }}
      className="image-full card-compact aspect-square rounded-lg bg-base-100 shadow-md hover:bg-base-200"
    >
      <Link href={post.slug} className="no-underline">
        <div className="card-body h-full">
          <div className="card-actions justify-between">
            <div className="badge-outline badge">{post.type}</div>
            <div className="">{formatDate(new Date(post.date))}</div>
          </div>
          <h2 className="card-title mt-2">{post.title}</h2>
          <p className="mb-0 overflow-clip">{post.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};
