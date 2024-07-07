"use client";

import React from "react";
import CreateStorySidebar from "../uiComps/CreateStorySidebar";
import StoryOutlet from "../uiComps/StoryOutlet";

export default function CreateStory() {
  const [storyType, setStoryType] = React.useState("");
  const [bgColor, setBgColor] = React.useState("#00A3FF");
  const [privacyType, setPrivacryType] = React.useState("public");
  const [storyText, setStoryText] = React.useState("");
  const [storyImage, setStoryImage] = React.useState(
    "https://res.cloudinary.com/dwqwxozwv/image/upload/v1720380734/affburg/image-2_icwpux.jpg"
  );
  const [imageScale, setImageScale] = React.useState(100);

  const handleCreateStory = () => {
    console.log(storyType, bgColor, privacyType, storyText, storyImage, imageScale);
  };

  return (
    <main className="flex" style={{ maxHeight: "calc(100vh - 60px)", minHeight: "500px" }}>
      <CreateStorySidebar
        storyType={storyType}
        setBgColor={setBgColor}
        handleCreateStory={handleCreateStory}
        privacyType={privacyType}
        setPrivacryType={setPrivacryType}
        storyText={storyText}
        setStoryText={setStoryText}
      />
      <StoryOutlet
        storyType={storyType}
        setStoryType={setStoryType}
        bgColor={bgColor}
        storyText={storyText}
        setStoryText={setStoryText}
        storyImage={storyImage}
        setStoryImage={setStoryImage}
        imageScale={imageScale}
        setImageScale={setImageScale}
      />
    </main>
  );
}
