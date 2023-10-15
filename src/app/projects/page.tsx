import { SpotlightProjects } from "@/components/projects/spotlight_projects/SpotlightProjects";
import { formatDate } from "@/lib/format";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";

const ProjectsPage = () => {
  const sortedProjects = allProjects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((d) => d.published);
  return (
    <main className=" flex min-h-screen flex-col items-center justify-stretch p-16">
      <SpotlightProjects />
      <section className="prose mt-8 w-full">
        <h1 className="text-lg">All Posts</h1>
        <ul>
          {sortedProjects.map((post) => (
            <li key={post.slugAsParams}>
              <Link href={post.slug}>
                {formatDate(new Date(post.date))} - {post.title}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ProjectsPage;
