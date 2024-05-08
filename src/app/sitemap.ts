import { getAllBlogs } from "@/service/get-all-blog";
import { getAllLabs } from "@/service/get-all-lab";

export const baseUrl = "https://www.lloydrichardsdesign.com";

export default async function sitemap() {
  const labs = (await getAllLabs()).map((lab) => ({
    url: `${baseUrl}/labs/${lab.slug}`,
    lastModified: lab.date,
  }));

  const blogs = (await getAllBlogs()).map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.date,
  }));

  const routes = ["", "/posts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...labs, ...blogs];
}
