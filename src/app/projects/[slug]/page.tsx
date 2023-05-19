import { Mdx } from "@/components/Mdx";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function getProjectFromParams(slug: string) {
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) notFound();

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params.slug);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams,
  }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProjectFromParams(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <Mdx code={project.body.code} />
      </div>
    </main>
  );
};

export default ProjectPage;
