import { ProjectInfoCard } from "@/app/projects/[slug]/project-info-card";
import { siteMetadata } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/seo";
import { getAllProjects } from "@/services/api/get-all-projects";
import { getProject } from "@/services/api/get-project";
import { getTeamMembers } from "@/services/api/get-team-members";
import { Effect } from "effect";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await Effect.runPromise(getProject(slug));
  if (!project) {
    return {};
  }
  return createPageMetadata({
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    image: project.frontmatter.ogImageURL,
    twitter: {
      title: `${project.frontmatter.title} | ${siteMetadata.title}`,
      description: project.frontmatter.description || siteMetadata.description,
      card: "summary_large_image",
      images: [project.frontmatter.ogImageURL],
    },
  });
}

export const generateStaticParams = async () => {
  const allProjects = await Effect.runPromise(getAllProjects);
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
  const project = await Effect.runPromise(getProject(slug));

  if (!project) {
    return notFound();
  }
  const team = await getTeamMembers(project.frontmatter.team);
  const { frontmatter, content } = project;

  return (
    <>
      <ProjectInfoCard project={frontmatter} team={team} />
      <article className="col-span-full mt-8 mb-16">{content}</article>
    </>
  );
};

export default ProjectPage;
