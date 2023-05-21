import { RecentPosts } from "@/components/posts/recent_posts/RecentPosts";
import { allBlogs, allLabs } from "contentlayer/generated";
import Link from "next/link";

const PostsPage = () => {
  const allPosts = [...allBlogs, ...allLabs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <RecentPosts />
      <section className="prose mt-8 w-full">
        <h1 className="text-lg">All Posts</h1>
        <ul>
          {allPosts
            .filter((d) => d.published)
            .map((post) => (
              <li key={post.slugAsParams}>
                <Link href={post.slug}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default PostsPage;
