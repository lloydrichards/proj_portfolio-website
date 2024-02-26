import { PostsGallery } from "@/components/organism/posts_gallery/posts_gallery";
import { getAllPosts } from "@/service/get-all-posts";

const PostsPage = () => {
  const allPosts = getAllPosts();
  return (
    <section className="flex min-h-screen flex-col items-stretch">
      <PostsGallery posts={allPosts} />
    </section>
  );
};

export default PostsPage;
