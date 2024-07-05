import React from "react";
import { MdCamera } from "react-icons/md";

export default function loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="m-10 flex flex-col items-center justify-between gap-1">
        <MdCamera size={50} color="#307777" className="animate-spin" />
        <p className="text-xl font-semibold mt-4 animate-pulse">Loading. . .</p>
      </div>
    </div>
  );
}
