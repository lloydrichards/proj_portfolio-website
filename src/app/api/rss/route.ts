import { Effect } from "effect";
import { siteMetadata } from "@/lib/metadata";
import { getBaseUrl } from "@/lib/utils";
import { Laboratory } from "@/services/Laboratory";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { descContent } from "@/services/utils";

export const dynamic = "force-static";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const [allProjects, allLabs] = await RuntimeServer.runPromise(
    Effect.all([Portfolio.all, Laboratory.all]),
  );

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>${escapeXml(siteMetadata.title)}</title>
            <link>${getBaseUrl()}</link>
            <description>${escapeXml(siteMetadata.description)}</description>
            <language>en-us</language>
            ${[...allLabs, ...allProjects]
              .sort(descContent)
              .map(
                (content) => `
            <item>
                <title>${escapeXml(content.title)}</title>
                <link>${getBaseUrl()}${content.slug}</link>
                <description>${escapeXml(content.description)}</description>
                <pubDate>${new Date(content.date).toUTCString()}</pubDate>
                <guid isPermaLink="true">${getBaseUrl()}${content.slug}</guid>
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
