import usePosts from "@/hooks/usePosts";
import React from "react";
import Post from "./Post";

export default function PostGallery() {
  const { posts } = usePosts();
  return (
    <div className="flex flex-col gap-2">
      {posts?.slice(0, 10).map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
