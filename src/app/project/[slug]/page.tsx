import { ProjectInfoCard } from "@/app/project/[slug]/project-info-card";
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
      <ProjectInfoCard project={frontmatter} />
      <article className="col-span-full mt-8 mb-16">{content}</article>
    </>
  );
};

export default ProjectPage;
