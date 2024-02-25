import { allBlogs, allLabs } from "@generated";
import { FC } from "react";
import { PostsNavigation } from "@/components/organism/posts_navigation/posts_navigation";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const PostLayout: FC<Props> = ({ children }) => {
  const allPosts = [...allBlogs, ...allLabs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-[1fr_3fr]">
      <PostsNavigation
        allPosts={allPosts}
        className="row-start-2 lg:row-start-auto lg:border-r-2"
      />
      {children}
    </main>
  );
};

export default PostLayout;
