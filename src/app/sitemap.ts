import { siteMetadata } from "@/lib/metadata";
import { getAllLabs } from "@/services/api/get-all-labs";
import { getAllProjects } from "@/services/api/get-all-projects";
import { Effect } from "effect";

export default async function sitemap() {
  const projects = await getAllProjects();
  const labs = await Effect.runPromise(getAllLabs);

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
