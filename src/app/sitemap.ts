import { Effect } from "effect";
import { cvVariants } from "@/app/cv/data/variants";
import { siteMetadata } from "@/lib/metadata";
import { Laboratory } from "@/services/Laboratory";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";

export default async function sitemap() {
  const [projects, labs] = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const portfolio = yield* Portfolio;
      const laboratory = yield* Laboratory;
      return yield* Effect.all([portfolio.visible, laboratory.visible]);
    }),
  );

  const notes = [...projects, ...labs].map((content) => ({
    url: siteMetadata.siteUrl + content.pathname,
    lastModified: content.lastModified,
  }));

  const cvRoutes = cvVariants.map((variant) => ({
    url: `${siteMetadata.siteUrl}/cv/${variant.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/about", "/projects", "/labs", "/timeline"].map(
    (route) => ({
      url: siteMetadata.siteUrl + route,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...cvRoutes, ...notes];
}
