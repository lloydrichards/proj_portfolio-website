import { Mdx } from "@/components/Mdx";
import { allExperiments } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ExperimentPageProps {
  params: {
    slug: string;
  };
}

async function getExperimentFromParams(slug: string) {
  const experiment = allExperiments.find(
    (experiment) => experiment.slugAsParams === slug
  );

  if (!experiment) notFound();

  return experiment;
}

export async function generateMetadata({
  params,
}: ExperimentPageProps): Promise<Metadata> {
  const experiment = await getExperimentFromParams(params.slug);

  return {
    title: experiment.title,
    description: experiment.description,
    openGraph: {
      title: experiment.title,
      description: experiment.description,
      type: "article",
    },
  };
}

export async function generateStaticParams(): Promise<
  ExperimentPageProps["params"][]
> {
  return allExperiments.map((experiment) => ({
    slug: experiment.slugAsParams,
  }));
}

const ExperimentPage = async ({ params }: ExperimentPageProps) => {
  const experiment = await getExperimentFromParams(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{experiment.title}</h1>
        <Mdx code={experiment.body.code} />
      </div>
    </main>
  );
};

export default ExperimentPage;
