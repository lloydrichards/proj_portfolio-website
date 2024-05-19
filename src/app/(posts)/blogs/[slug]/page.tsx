import { MdxContent } from "@/components/molecule/mdx_content/mdx_content";
import { Metadata } from "next";
import "@/styles/mdx.css";
import { getBlog } from "@/service/get-blog";
import { notFound } from "next/navigation";

export interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { title, description, slug } = await getBlog(params.slug);
  const ogImage = `/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: slug,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();

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
