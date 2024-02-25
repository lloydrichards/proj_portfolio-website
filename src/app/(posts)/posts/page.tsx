import { RecentPosts } from "@/components/organism/recent_posts/recent_posts";
import { getAllPosts } from "@/service/get-all-posts";

const PostsPage = () => {
  const allPosts = getAllPosts();
  return (
    <section className="flex min-h-screen flex-col items-stretch">
      <RecentPosts posts={allPosts} />
    </section>
  );
};

export default PostsPage;
