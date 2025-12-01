import { Effect, Either } from "effect";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectInfoCard } from "@/app/projects/[slug]/project-info-card";
import { siteMetadata } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";

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
    if (result.left._tag === "MissingContentError") {
      return notFound();
    }
    throw new Error(result.left._tag);
  }

  const [content, project] = result.right;

  // Access control based on status
  if (process.env.NODE_ENV === "production") {
    if (project.status === "draft") {
      return notFound(); // Drafts never accessible in production
    }
    // "unpublished" is accessible via direct URL in production
    // "published" is fully accessible
  }

  const team = await RuntimeServer.runPromise(
    Portfolio.getTeamMembers(project.team),
  );

  const isDev = process.env.NODE_ENV === "development";
  const showStatusBanner =
    project.status === "unpublished" || (isDev && project.status === "draft");

  return (
    <>
      {showStatusBanner && (
        <div
          className={cn(
            "col-span-full p-4 rounded-md mb-4 text-center font-semibold",
            project.status === "draft" && "bg-yellow-500/20 border-yellow-500",
            project.status === "unpublished" &&
              "bg-orange-500/20 border-orange-500",
          )}
        >
          {project.status === "draft" && "DRAFT - Only visible in development"}
          {project.status === "unpublished" &&
            "UNPUBLISHED - Hidden from lists in production"}
        </div>
      )}
      <ProjectInfoCard project={project} team={team} />
      <article className="col-span-full mt-8 mb-16">{content}</article>
    </>
  );
};

export default ProjectPage;
