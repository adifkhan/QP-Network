import React from "react";
import { TbTextSize } from "react-icons/tb";
import { FaImage } from "react-icons/fa6";
import ResizableTextArea from "./ResizableTextArea";
import { LuImagePlus } from "react-icons/lu";
import imageUploader from "@/utilities/imageUploader";
import Image from "next/image";

export default function StoryOutlet({
  storyType,
  setStoryType,
  bgColor,
  storyText,
  setStoryText,
  storyImage,
  setStoryImage,
  imageScale,
  setImageScale,
}) {
  const handleStoryImage = async (e) => {
    const imageData = await imageUploader(e.target.files[0]);
    setStoryImage(imageData);
  };

  return (
    <div className="w-full px-6 py-10 overflow-y-auto">
      <div className="bg-white w-full p-3 rounded-md">
        <h4 className="text-neutral font-semibold">
          {storyType ? "Preview" : "Select Story Type"}
        </h4>
        {storyType ? (
          storyType === "photo_story" ? (
            <div className="bg-[#f0f2f5] flex flex-col items-center justify-center gap-2 rounded-md py-16 mt-2">
              <section
                className={`flex flex-col gap-3 items-center justify-center w-[240px] h-[350px] rounded-md bg-[${bgColor}] `}
              >
                {storyImage ? (
                  <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
                    <Image
                      width={200}
                      height={300}
                      src={storyImage}
                      alt="story"
                      className="w-full"
                      style={{ transform: `scale(${imageScale / 100})` }}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <ResizableTextArea
                        storyText={storyText}
                        setStoryText={setStoryText}
                        placeholder={""}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="story-image-uploader"
                      className="w-10 h-10 flex items-center justify-center rounded-md border-dashed border-2 cursor-pointer"
                    >
                      <LuImagePlus size={22} color="white" />
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="story-image-uploader"
                      style={{
                        display: "none",
                      }}
                      onChange={handleStoryImage}
                    />
                  </div>
                )}
              </section>
              <input
                type="range"
                min={70}
                max={130}
                defaultValue={imageScale}
                className="range w-[400px] h-4 range-accent"
                onChange={(e) => setImageScale(e.target.value)}
              />
            </div>
          ) : (
            <div className="bg-[#f0f2f5] flex justify-center rounded-md py-16 mt-2">
              <section
                className={`flex flex-col gap-3 items-center justify-center w-[240px] h-[350px] rounded-md bg-[${bgColor}] cursor-pointer p-2`}
              >
                <ResizableTextArea
                  storyText={storyText}
                  setStoryText={setStoryText}
                  placeholder={"Start Typing"}
                />
              </section>
            </div>
          )
        ) : (
          <div className="bg-[#f0f2f5] flex justify-center gap-2 rounded-md py-16 mt-2">
            <section
              onClick={() => setStoryType("photo_story")}
              className="flex flex-col gap-3 items-center justify-center w-[240px] h-[350px] rounded-md bg-gradient-to-t from-purple-500 to-pink-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <FaImage size={22} />
              </div>
              <p className="text-white font-semibold text-sm">Create Your Photo Story</p>
            </section>
            <section
              onClick={() => setStoryType("text_story")}
              className="flex flex-col gap-3 items-center justify-center w-[240px] h-[350px] rounded-md bg-gradient-to-t from-sky-500 to-indigo-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <TbTextSize size={28} />
              </div>
              <p className="text-white font-semibold text-sm">Create Your Text Story</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
