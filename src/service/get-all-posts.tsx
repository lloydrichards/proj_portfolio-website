import { allBlogs, allLabs } from "@generated";

export const getAllPosts = () => {
  return [...allBlogs, ...allLabs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};
