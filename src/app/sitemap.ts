import { siteMetadata } from "@/lib/metadata";
import { getAllLabs } from "@/services/get-all-labs";
import { getAllProjects } from "@/services/get-all-projects";

export default async function sitemap() {
  const projects = await getAllProjects();
  const labs = await getAllLabs();

  const notes = [...projects, ...labs].map(({ frontmatter }) => ({
    url: siteMetadata.siteUrl + frontmatter.pathname,
    lastModified: frontmatter.lastModified,
  }));

  const routes = ["", "/about", "/projects", "/labs", "/timeline"].map(
    (route) => ({
      url: siteMetadata.siteUrl + route,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...notes];
}
