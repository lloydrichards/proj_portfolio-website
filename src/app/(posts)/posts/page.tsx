import { formatDate } from "@/lib/format";
import { allBlogs, allExperiments } from "contentlayer/generated";
import Link from "next/link";

const PostsPage = () => {
  const allPosts = [...allBlogs, ...allExperiments].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const recentPosts = allPosts.filter((d) => d.published).slice(0, 6);
  return (
    <main className="prose flex min-h-screen flex-col items-center p-16">
      <section>
        <h1 className="text-lg">Recent Posts</h1>
        <div className="grid grid-cols-2 gap-2">
          {recentPosts.map((post) => (
            <Link
              key={post.slugAsParams}
              href={post.slug}
              className="image-full card-compact rounded-lg bg-base-100 no-underline shadow-md hover:bg-base-200"
            >
              <div className="card-body h-full">
                <div className="card-actions justify-between">
                  <div className="badge-outline badge">{post.type}</div>
                  <div className="">{formatDate(new Date(post.date))}</div>
                </div>
                <h2 className="card-title">{post.title}</h2>
                <p className="h-full overflow-clip">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-8 w-full">
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
