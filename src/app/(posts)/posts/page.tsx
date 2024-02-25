import { RecentPosts } from "@/components/organism/recent_posts/recent_posts";
import { allBlogs, allLabs } from "@generated";

const PostsPage = () => {
  const allPosts = [...allBlogs, ...allLabs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <section className="flex min-h-screen flex-col items-stretch">
      <RecentPosts posts={allPosts} />
    </section>
  );
};

export default PostsPage;
