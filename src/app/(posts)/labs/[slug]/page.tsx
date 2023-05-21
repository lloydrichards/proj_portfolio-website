import { Mdx } from "@/components/Mdx";
import { allLabs } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface LabPageProps {
  params: {
    slug: string;
  };
}

async function getLabFromParams(slug: string) {
  const lab = allLabs.find((lab) => lab.slugAsParams === slug);

  if (!lab) notFound();

  return lab;
}

export async function generateMetadata({
  params,
}: LabPageProps): Promise<Metadata> {
  const lab = await getLabFromParams(params.slug);

  return {
    title: lab.title,
    description: lab.description,
    openGraph: {
      title: lab.title,
      description: lab.description,
      type: "article",
    },
  };
}

export async function generateStaticParams(): Promise<
  LabPageProps["params"][]
> {
  return allLabs.map((lab) => ({
    slug: lab.slugAsParams,
  }));
}

const LabPage = async ({ params }: LabPageProps) => {
  const lab = await getLabFromParams(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{lab.title}</h1>
        <Mdx code={lab.body.code} />
      </div>
    </main>
  );
};

export default LabPage;
