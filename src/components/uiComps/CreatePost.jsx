import Image from "next/image";
import React from "react";
import StoryGallery from "./StoryGallery";

export default function CreatePost() {
  return (
    <div className="flex flex-col gap-[2px]">
      <section className="flex items-center justify-center gap-4 bg-white px-8 py-7 rounded-sm">
        <div className="flex items-center justify-center w-[60px] h-[60px] bg-gray-300 rounded-full">
          <Image width={60} height={60} src={"/avatar/create_post.png"} alt="people" />
        </div>
        <div className="grow flex items-center gap-2 px-2 py-1 bg-[#F0F2F5] rounded-full text-neutral">
          <input
            type="text"
            placeholder="What’s on your mind, James?"
            className="bg-transparent w-full focus:outline-none p-2 h-[45px]"
          />
        </div>
      </section>
      <section className="flex items-center justify-evenly bg-white py-4 rounded-sm">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={25} height={25} src={"/icons/camera.png"} alt="camera" />
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            Live Video
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={25} height={25} src={"/icons/photo_frame.png"} alt="camera" />
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            Photo/Video
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={25} height={25} src={"/icons/happy_emoji.png"} alt="camera" />
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            Feeling/activity
          </p>
        </div>
      </section>
      <StoryGallery />
    </div>
  );
}
