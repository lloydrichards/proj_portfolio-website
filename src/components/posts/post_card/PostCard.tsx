import { formatDate } from "@/lib/format";
import { Blog, Experiment } from "contentlayer/generated";
import Link from "next/link";

export interface IPostCard {
  post: Blog | Experiment;
}

export const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <Link
      href={post.slug}
      className="image-full card-compact rounded-lg bg-base-100 no-underline shadow-md hover:bg-base-200"
    >
      <div className="card-body h-full">
        <div className="card-actions justify-between">
          <div className="badge-outline badge">{post.type}</div>
          <div className="">{formatDate(new Date(post.date))}</div>
        </div>
        <h2 className="card-title">{post.title}</h2>
        <p className="h-full overflow-clip">{post.description}</p>
      </div>
    </Link>
  );
};
