import { BlogPageProps } from "@/app/(posts)/blogs/[slug]/page";
import { Mdx } from "@/components/Mdx";
import { Modal } from "@/components/layout/modal/Modal";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";

const getBlogFromParams = async (slug: string) => {
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);
  if (!blog) notFound();
  return blog;
};

const BlogModal = async ({ params }: BlogPageProps) => {
  const blog = await getBlogFromParams(params.slug);
  return (
    <Modal>
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <Link href={blog.slug}>Full Screen</Link>
        <Mdx code={blog.body.code} />
      </div>
    </Modal>
  );
};

export default BlogModal;
