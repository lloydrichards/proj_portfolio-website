"use client";

import { Blog, Lab } from "@generated";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PostCard } from "../../molecule/post_card/post_card";
import { Button } from "@/components/atom/button/button";
import { useRecentPosts } from "./use-recent-posts";

interface PostsGalleryProps {
  posts: (Blog | Lab)[];
  limit?: number;
}

export const PostsGallery: React.FC<PostsGalleryProps> = ({ posts, limit }) => {
  const [filter, setFilter] = useState<"Lab" | "Blog" | null>(null);

  const recentPosts = useRecentPosts(posts, { limit, filter });

  return (
    <section className={`flex w-full flex-col items-center`}>
      <div className="prose flex flex-col gap-4 dark:prose-invert">
        <div className="flex items-center gap-2">
          <h1 className="mb-0 text-lg">Recent</h1>
          <Button
            variant={filter == null ? "default" : "ghost"}
            onClick={() => setFilter(null)}
          >
            Posts
          </Button>
          <Button
            variant={filter == "Blog" ? "default" : "ghost"}
            onClick={() => setFilter("Blog")}
          >
            Blogs
          </Button>
          <Button
            variant={filter == "Lab" ? "default" : "ghost"}
            onClick={() => setFilter("Lab")}
          >
            Labs
          </Button>
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
