import { MdxContent } from "@/components/molecule/mdx_content/mdx_content";
import { Metadata } from "next";
import "@/styles/mdx.css";
import { getBlog } from "@/service/get-blog";
import { getAllBlogs } from "@/service/get-all-blog";

export interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlog(params.slug);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
    },
  };
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  const allBlogs = await getAllBlogs();
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams,
  }));
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await getBlog(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center dark:prose-invert">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <MdxContent code={blog.body.code} />
      </div>
    </main>
  );
};

export default BlogPage;
