import { getBaseUrl } from "@/lib/utils";
import { getAllLabs } from "@/service/get-all-lab";
import { getAllPosts } from "@/service/get-all-posts";

export async function GET() {
  const allLabs = await getAllLabs();
  const allBlogs = await getAllPosts();

  const labItemsXml = allLabs
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1;
      }
      return 1;
    })
    .map(
      (lab) =>
        `<item>
          <title>${lab.title}</title>
          <link>${getBaseUrl()}${lab.slug}</link>
          <description>${lab.description || ""}</description>
          <pubDate>${new Date(lab.date).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const blogItemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1;
      }
      return 1;
    })
    .map(
      (blog) =>
        `<item>
          <title>${blog.title}</title>
          <link>${getBaseUrl()}${blog.slug}</link>
          <description>${blog.description || ""}</description>
          <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${getBaseUrl()}</link>
        <description>This is my portfolio RSS feed</description>
        ${labItemsXml}
        ${blogItemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
