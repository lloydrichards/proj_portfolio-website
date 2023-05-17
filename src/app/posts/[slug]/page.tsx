import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/Mdx";

import "@/styles/mdx.css";
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) notFound();

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params.slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params.slug);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
}