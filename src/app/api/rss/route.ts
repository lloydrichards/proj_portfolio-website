import { metadata } from "@/app/layout";
import { getBaseUrl } from "@/lib/utils";
import { Laboratory } from "@/services/Laboratory";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { descContent } from "@/services/utils";
import { Effect } from "effect";

export const dynamic = "force-static";

export async function GET() {
  const [allProjects, allLabs] = await RuntimeServer.runPromise(
    Effect.all([Portfolio.all, Laboratory.all]),
  );

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
                (content) => `
            <item>
                <title>${content.title}</title>
                <link>${getBaseUrl()}${content.slug}</link>
                <description>${content.description}</description>
                <pubDate>${new Date(content.date).toUTCString()}</pubDate>
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
