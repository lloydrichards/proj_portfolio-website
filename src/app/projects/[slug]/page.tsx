import { MdxContent } from "@/components/molecule/mdx_content/mdx_content";
import { Metadata } from "next";
import { getProject } from "@/service/get-project";

export interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.image,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    },
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProject(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center dark:prose-invert">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <MdxContent code={project.body.code} />
      </div>
    </main>
  );
};

export default ProjectPage;
