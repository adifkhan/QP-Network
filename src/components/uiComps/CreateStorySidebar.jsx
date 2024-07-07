import React from "react";

export default function CreateStorySidebar({
  storyType,
  setBgColor,
  handleCreateStory,
  privacyType,
  setPrivacryType,
  storyText,
  setStoryText,
}) {
  return (
    <div className="bg-white text-neutral px-4 py-5 w-[350px] flex flex-col justify-between">
      <div>
        <h4 className="font-semibold text-xl">Create Your story</h4>
        {storyType && (
          <div className="mt-3">
            <textarea
              className="textarea textarea-bordered border-[#CED0D4] w-full rounded-sm focus:outline-none h-40 resize-none"
              value={storyText}
              placeholder="Start Typing"
              onChange={(e) => setStoryText(e.target.value)}
            ></textarea>
            <div className="mt-4">
              <p className="text-sm font-semibold">Background Color</p>
              <div className="flex justify-center gap-2 p-2 border-[1px] border-[#CED0D4] rounded-sm mt-2">
                <span
                  onClick={() => setBgColor("#00A3FF")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#00A3FF]"
                ></span>
                <span
                  onClick={() => setBgColor("#0019FE")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#0019FE]"
                ></span>
                <span
                  onClick={() => setBgColor("#1C5A76")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#1C5A76]"
                ></span>
                <span
                  onClick={() => setBgColor("#F25268")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#F25268]"
                ></span>
                <span
                  onClick={() => setBgColor("#FF6928")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#FF6928]"
                ></span>
                <span
                  onClick={() => setBgColor("#F8D000")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#F8D000]"
                ></span>
                <span
                  onClick={() => setBgColor("#A9E400")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#A9E400]"
                ></span>
                <span
                  onClick={() => setBgColor("#EE0000")}
                  className="inline-block w-5 h-5 rounded-full cursor-pointer bg-[#EE0000]"
                ></span>
              </div>
            </div>
          </div>
        )}
        <select
          name="privacy"
          className="select select-bordered border-[#CED0D4] w-full max-w-xs min-h-10 h-10 bg-white focus:outline-none mt-4 font-semibold"
          defaultValue={privacyType}
          onChange={(e) => setPrivacryType(e.target.value)}
        >
          <option value="public" className="font-semibold">
            Public
          </option>
          <option value="friends" className="font-semibold">
            Friends
          </option>
          <option value="onlyme" className="font-semibold">
            Only Me
          </option>
        </select>
      </div>
      <button
        onClick={handleCreateStory}
        className="btn w-full min-h-10 h-10 bg-accent text-white border-none font-medium mt-4 rounded"
      >
        Create Story
      </button>
    </div>
  );
}
