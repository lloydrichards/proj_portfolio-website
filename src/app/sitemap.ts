import { siteMetadata } from "@/lib/metadata";
import { api } from "@/services/api";

export default async function sitemap() {
  const projects = await api.projects.fetchAllProjects();
  const labs = await api.labs.fetchAllLabs();

  const notes = [...projects, ...labs].map((content) => ({
    url: siteMetadata.siteUrl + content.pathname,
    lastModified: content.lastModified,
  }));

  const routes = ["", "/about", "/projects", "/labs", "/timeline"].map(
    (route) => ({
      url: siteMetadata.siteUrl + route,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...notes];
}
