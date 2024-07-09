"use client";

import React from "react";
import CreateStorySidebar from "../uiComps/CreateStorySidebar";
import StoryOutlet from "../uiComps/StoryOutlet";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

export default function CreateStory() {
  const { auth } = useAppSelector((state) => state.authReducer);
  const router = useRouter();
  const [storyType, setStoryType] = React.useState("");
  const [bgColor, setBgColor] = React.useState("#00A3FF");
  const [privacyType, setPrivacryType] = React.useState("public");
  const [storyText, setStoryText] = React.useState("");
  const [storyImage, setStoryImage] = React.useState("");
  const [imageScale, setImageScale] = React.useState(100);

  const handleCreateStory = () => {
    fetch("/api/create-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: auth?._id ?? "66878e4544edc6fbb5f548c1",
        user_name: auth?.fullName ?? "Adif Khan",
        storyType,
        bgColor,
        privacyType,
        storyText,
        storyImage,
        imageScale,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data?.message);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex" style={{ minHeight: "500px", height: "calc(100vh - 60px)" }}>
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
