import { Blog, Lab } from "@generated";
import { useMemo } from "react";

export const useRecentPosts = (
  posts: (Blog | Lab)[],
  { limit, filter }: { limit?: number; filter: "Blog" | "Lab" | null },
) => {
  const allPosts = useMemo(
    () =>
      posts
        .filter((d) => !filter || d.type === filter)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
    [filter, posts],
  );
  const recentPosts = useMemo(
    () =>
      allPosts.filter((d) => d.published).slice(0, limit || allPosts.length),
    [allPosts, limit],
  );

  return recentPosts;
};
