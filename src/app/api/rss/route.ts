import { metadata } from "@/app/layout";
import { getBaseUrl } from "@/lib/utils";
import { getAllPosts } from "@/service/get-all-posts";

export async function GET() {
  const blogPosts = await getAllPosts();

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>${metadata.title}</title>
            <link>${getBaseUrl()}</link>
            <description>${metadata.description}</description>
            <language>en-us</language>
            ${blogPosts
              .map(
                (post) => `
            <item>
                <title>${post.title}</title>
                <link>${getBaseUrl()}${post.slug}</link>
                <description>${post.description}</description>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
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
