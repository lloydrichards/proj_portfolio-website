import { ProjectInfoCard } from "@/app/projects/[slug]/project-info-card";
import { siteMetadata } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/seo";
import { api } from "@/services/api";
import { getTeamMembers } from "@/services/api/actions/get-team-members";
import { Either } from "effect";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [_, project] = await api.projects.getProjectBySlug(slug);

  return createPageMetadata({
    title: project.title,
    description: project.description,
    image: project.ogImageURL,
    twitter: {
      title: `${project.title} | ${siteMetadata.title}`,
      description: project.description || siteMetadata.description,
      card: "summary_large_image",
      images: [project.ogImageURL],
    },
  });
}

export const generateStaticParams = async () => {
  const allProjects = await api.projects.fetchAllProjects();
  const paths = allProjects.map(({ slug }) => ({
    slug: encodeURI(slug),
  }));
  return paths;
};

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const result = await api.projects.queryProjectBySlug(slug);

  if (Either.isLeft(result)) {
    if (result.left._tag == "MissingContentError") {
      return notFound();
    }
    throw new Error(result.left._tag);
  }

  const [content, project] = result.right;

  const team = await getTeamMembers(project.team);

  return (
    <>
      <ProjectInfoCard project={project} team={team} />
      <article className="col-span-full mt-8 mb-16">{content}</article>
    </>
  );
};

export default ProjectPage;
