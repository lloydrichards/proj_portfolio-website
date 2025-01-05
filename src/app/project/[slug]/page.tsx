import { ProjectInfoCard } from "@/app/project/[slug]/project-info-card";
import { createPageMetadata } from "@/lib/seo";
import { siteMetadata } from "@/lib/metadata";
import { getAllProjects } from "@/services/get-all-projects";
import { getProject } from "@/services/get-project";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  return createPageMetadata({
    title: project?.frontmatter.title ?? siteMetadata.title,
    description: project?.frontmatter.description,
  });
}

export const generateStaticParams = async () => {
  const allProjects = await getAllProjects();
  const paths = allProjects.map(({ frontmatter }) => ({
    slug: encodeURI(frontmatter.slug),
  }));
  return paths;
};

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
