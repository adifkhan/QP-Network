import React from "react";
import CreatePost from "./CreatePost";
import PostGallery from "./PostGallery";

export default function PostOutlet() {
  return (
    <div className="flex flex-col gap-2 py-2">
      <CreatePost />
      <PostGallery />
    </div>
  );
}
