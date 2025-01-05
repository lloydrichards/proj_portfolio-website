import { getAllLabs } from "@/services/get-all-labs";
import { getAllProjects } from "@/services/get-all-projects";

export const BASE_URL = "https://lloydrichards.dev";

export default async function sitemap() {
  const projects = await getAllProjects();
  const labs = await getAllLabs();

  const notes = [...projects, ...labs].map(({ frontmatter }) => ({
    url: BASE_URL + frontmatter.pathname,
    lastModified: frontmatter.lastModified,
  }));

  const routes = ["", "/about", "/project", "/lab", "/timeline"].map(
    (route) => ({
      url: BASE_URL + route,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...notes];
}
