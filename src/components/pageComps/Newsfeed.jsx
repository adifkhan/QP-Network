"use client";

import React from "react";
import { useAppSelector } from "@/redux/store";
import LeftSidebar from "../uiComps/LeftSidebar";
import SuggestionsBar from "../uiComps/SuggestionsBar";
import RightSidebar from "../uiComps/RightSidebar";
import PostOutlet from "../uiComps/PostOutlet";

export default function Newsfeed() {
  const { auth } = useAppSelector((state) => state.authReducer);

  // console.log("user:", auth);
  return (
    <main className="grid grid-cols-6 gap-2 bg-[#E5E6EC]">
      <div>
        <LeftSidebar />
      </div>
      <div>
        <SuggestionsBar />
      </div>
      <div className="col-span-3">
        <PostOutlet />
      </div>
      <div>
        <RightSidebar />
      </div>
    </main>
  );
}
