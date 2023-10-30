import { Mdx } from "@/components/Mdx";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";

export interface BlogPageProps {
  params: {
    slug: string;
  };
}

const getBlogFromParams = async (slug: string) => {
  const blog = allBlogs.find((blog) => blog._raw.sourceFileName === slug);
  if (!blog) notFound();
  return blog;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params.slug);

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
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams,
  }));
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await getBlogFromParams(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <Mdx code={blog.body.code} />
      </div>
    </main>
  );
};

export default BlogPage;
