import {
  BlogPageProps,
  getBlogFromParams,
} from "@/app/(posts)/blogs/[slug]/page";
import { Mdx } from "@/components/Mdx";
import { Modal } from "@/components/layout/modal/Modal";
import Link from "next/link";

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
