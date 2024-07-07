import React from "react";
import CreateStorySidebar from "../uiComps/CreateStorySidebar";

export default function CreateStory() {
  return (
    <div className="flex " style={{ minHeight: "calc(100vh - 60px)" }}>
      <CreateStorySidebar />
      <div className="w-full">story outlet</div>
    </div>
  );
}
