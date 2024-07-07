import React from "react";

export default function CreateStorySidebar() {
  return (
    <div className="bg-white text-neutral px-4 py-5 w-[350px] flex flex-col justify-between">
      <div>
        <h4 className="font-semibold ">Create Your story</h4>
        <select
          name="privacy"
          className="select select-bordered w-full max-w-xs min-h-10 h-10 bg-white focus:outline-none mt-4"
        >
          <option value="public">Public</option>
          <option value="friends">Friends</option>
          <option value="onlyme">Only Me</option>
        </select>
      </div>
      <button className="btn w-full min-h-10 h-10 bg-accent text-white border-none font-medium mt-4 rounded">
        Create Story
      </button>
    </div>
  );
}
