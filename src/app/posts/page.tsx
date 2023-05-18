import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

const PostsPage = () => {
  return (
    <div>
      <h1 className="text-lg">Posts</h1>
      {allPosts.map((post) => (
        <Link key={post.slugAsParams} href={post.slug} className="bg-slate-700">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default PostsPage;
