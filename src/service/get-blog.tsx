import { allBlogs } from "@generated";
import { notFound } from "next/navigation";

export const getBlog = async (slug: string) => {
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);
  if (!blog) notFound();
  return blog;
};
