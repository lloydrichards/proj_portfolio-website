"use client";

import { Blog, Lab } from "contentlayer/generated";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PostCard } from "../post_card/PostCard";

interface RecentPostsProps {
  posts: (Blog | Lab)[];
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  const [filter, setFilter] = useState<"Lab" | "Blog" | null>(null);
  const allPosts = useMemo(
    () =>
      posts
        .filter((d) => !filter || d.type === filter)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
    [filter, posts]
  );
  const recentPosts = useMemo(
    () => allPosts.filter((d) => d.published).slice(0, 6),
    [allPosts]
  );

  return (
    <section className={` flex flex-col items-center`}>
      <div className="prose flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="mb-0 text-lg">Recent</h1>
          <button
            className={`btn-sm btn ${
              filter == null ? "btn-outline" : "btn-ghost"
            }`}
            onClick={() => setFilter(null)}
          >
            Posts
          </button>
          <button
            className={`btn-sm btn ${
              filter == "Blog" ? "btn-outline" : "btn-ghost"
            }`}
            onClick={() => setFilter("Blog")}
          >
            Blogs
          </button>
          <button
            className={`btn-sm btn ${
              filter == "Lab" ? "btn-outline" : "btn-ghost"
            }`}
            onClick={() => setFilter("Lab")}
          >
            Labs
          </button>
        </div>
        <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {recentPosts.map((post) => (
              <PostCard key={post.slugAsParams} post={post} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
