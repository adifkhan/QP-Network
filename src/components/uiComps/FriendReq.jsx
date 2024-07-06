import useSuggestions from "@/hooks/useSuggestions";
import Image from "next/image";
import React from "react";
import Loader from "../shared/Loader";

export default function FriendReq() {
  const { suggestions, loading } = useSuggestions();
  return (
    <div className="bg-white text-neutral px-2 py-3 rounded min-h-[240px]">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold  text-sm">Friend Requests</h4>
        <p className="text-xs text-accent cursor-pointer hover:underline">See all</p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 flex flex-col gap-3 ">
          {suggestions?.slice(10, 13)?.map((person, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full">
                <Image width={40} height={40} src={"/avatar/friend_req.png"} alt="people" />
              </div>
              <div className="grow flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold max-w-[120px] text-ellipsis overflow-hidden whitespace-nowrap">
                    {person?.first_name + " " + person?.last_name}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    2h<span className="text-xs">●</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="btn min-h-6 h-6 bg-accent text-white text-xs font-normal border-none rounded px-4">
                    Confirm
                  </button>
                  <button className="btn min-h-6 h-6 bg-neutral text-white text-xs font-normal border-none rounded px-4">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
