import { getProject } from "@/services/get-project";
import { notFound } from "next/navigation";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return notFound();
  }
  const { frontmatter, content } = project;

  return (
    <>
      <section className="mosaic-rows col-span-full grid">
        <h1>{frontmatter.title}</h1>
        <p className="row-span-2">{frontmatter.description}</p>
      </section>
      <article className="col-span-full mb-16">{content}</article>
    </>
  );
};

export default ProjectPage;
