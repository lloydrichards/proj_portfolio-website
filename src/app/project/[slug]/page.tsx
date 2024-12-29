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
      <section className="col-span-full row-span-2 md:col-[3/-1] lg:col-[7/-1]">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </section>
      <article className="col-span-full row-span-10 md:col-[3/-1] md:row-span-24 lg:col-[7/-1]">
        {content}
      </article>
    </>
  );
};

export default ProjectPage;
