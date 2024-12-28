import { ProjectCard } from "@/components/molecule/project_card/project_card";
import { getFeaturedLabs } from "@/services/get-featured-labs";
import { getFeaturedProjects } from "@/services/get-featured-projects";
import Link from "next/link";

const HomePage = async () => {
  const allProjects = await getFeaturedProjects();
  const allLabs = await getFeaturedLabs();

  return (
    <div>
      <h1>Welcome to the homepage</h1>
      <hr />
      {allProjects.map(({ frontmatter }) => (
        <ProjectCard key={"project" + frontmatter.slug} project={frontmatter} />
      ))}
      <hr />
      {allLabs.map(({ frontmatter }) => (
        <div key={"lab" + frontmatter.slug}>
          <Link href={frontmatter.pathname}>{frontmatter.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
