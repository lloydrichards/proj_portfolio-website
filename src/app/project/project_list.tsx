import { getAllProjects } from "@/services/get-all-projects";
import Link from "next/link";

export const ProjectList = async () => {
  const allProjects = await getAllProjects();

  return (
    <nav className="flex min-w-56 flex-col gap-2">
      <h1>Projects</h1>
      <hr />
      {allProjects.map(({ frontmatter }) => (
        <div key={frontmatter.slug}>
          <Link href={frontmatter.pathname}>
            {frontmatter.id} - {frontmatter.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};
