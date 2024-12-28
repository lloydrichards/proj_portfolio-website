import { getProject } from "@/services/get-project";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await params.slug;
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
}
