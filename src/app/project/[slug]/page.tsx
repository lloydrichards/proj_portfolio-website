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
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      {content}
    </div>
  );
};

export default ProjectPage;
