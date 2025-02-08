import { metadata } from "@/app/layout";
import { getBaseUrl } from "@/lib/utils";
import { api } from "@/services/api";
import { descContent } from "@/services/api/utils";

export async function GET() {
  const allLabs = await api.labs.fetchAllLabs();
  const allProjects = await api.projects.fetchAllProjects();

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
