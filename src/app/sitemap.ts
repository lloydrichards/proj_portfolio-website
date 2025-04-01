import { siteMetadata } from "@/lib/metadata";
import { LabApi } from "@/services/LabApi";
import { ProjectApi } from "@/services/ProjectApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Effect } from "effect";

export default async function sitemap() {
  const [projects, labs] = await RuntimeServer.runPromise(
    Effect.all([
      ProjectApi.pipe(Effect.andThen((a) => a.all)),
      LabApi.pipe(Effect.andThen((a) => a.all)),
    ]),
  );

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
