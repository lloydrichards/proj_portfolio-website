import { getAllProjects } from "@/services/get-all-projects";

export const BASE_URL = "https://lloydrichards.dev";

export default async function sitemap() {
  const projects = await getAllProjects();

  const notes = projects.map(({ frontmatter }) => ({
    url: BASE_URL + frontmatter.pathname,
    lastModified: frontmatter.lastModified,
  }));

  const routes = ["", "/project"].map((route) => ({
    url: BASE_URL + route,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes];
}
