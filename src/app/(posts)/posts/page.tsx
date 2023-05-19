import { PostCard } from "@/components/posts/post_card/PostCard";
import { allBlogs, allExperiments } from "contentlayer/generated";
import Link from "next/link";

const PostsPage = () => {
  const allPosts = [...allBlogs, ...allExperiments].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const recentPosts = allPosts.filter((d) => d.published).slice(0, 6);
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <section className="prose">
        <h1 className="text-lg">Recent Posts</h1>
        <div className="grid grid-cols-2 gap-2">
          {recentPosts.map((post) => (
            <PostCard key={post.slugAsParams} post={post} />
          ))}
        </div>
      </section>
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
