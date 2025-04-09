import { ProjectInfoCard } from "@/app/projects/[slug]/project-info-card";
import { siteMetadata } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/seo";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Effect, Either } from "effect";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [_, project] = await RuntimeServer.runPromise(
    Portfolio.getProject(slug),
  );

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
  const allProjects = await RuntimeServer.runPromise(Portfolio.all);
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
  const result = await RuntimeServer.runPromise(
    Portfolio.getProject(slug).pipe(Effect.either),
  );
  if (Either.isLeft(result)) {
    if (result.left._tag == "MissingContentError") {
      return notFound();
    }
    throw new Error(result.left._tag);
  }

  const [content, project] = result.right;

  const team = await RuntimeServer.runPromise(
    Portfolio.getTeamMembers(project.team),
  );

  return (
    <>
      <ProjectInfoCard project={project} team={team} />
      <article className="col-span-full mt-8 mb-16">{content}</article>
    </>
  );
};

export default ProjectPage;
