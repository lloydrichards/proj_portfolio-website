import { metadata } from "@/app/layout";
import { getBaseUrl } from "@/lib/utils";
import { getAllLabs } from "@/services/api/get-all-labs";
import { getAllProjects } from "@/services/api/get-all-projects";
import { descContent } from "@/services/api/utils";
import { Effect } from "effect";

export async function GET() {
  const allLabs = await Effect.runPromise(getAllLabs);
  const allProjects = await Effect.runPromise(getAllProjects);

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>${metadata.title}</title>
            <link>${getBaseUrl()}</link>
            <description>${metadata.description}</description>
            <language>en-us</language>
            ${[...allLabs, ...allProjects]
              .sort(descContent)
              .map(
                ({ frontmatter }) => `
            <item>
                <title>${frontmatter.title}</title>
                <link>${getBaseUrl()}${frontmatter.slug}</link>
                <description>${frontmatter.description}</description>
                <pubDate>${new Date(frontmatter.date).toUTCString()}</pubDate>
            </item>
            `,
              )
              .join("")}
        </channel>
    </rss>`;

  return new Response(feed, {
    status: 200,
    headers: { "Content-Type": "application/rss+xml" },
  });
}
