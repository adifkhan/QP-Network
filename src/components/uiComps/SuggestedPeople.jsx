import useSuggestions from "@/hooks/useSuggestions";
import Image from "next/image";
import React from "react";
import Loader from "../shared/Loader";

export default function SuggestedPeople() {
  const { suggestions, loading } = useSuggestions();
  return (
    <div className="bg-white text-neutral px-2 py-3 rounded min-h-[300px]">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold  text-sm">People You May Know</h4>
        <p className="text-xs text-accent cursor-pointer hover:underline">See All</p>
      </div>
      {loading ? (
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3 ">
          {suggestions?.slice(5, 10)?.map((person, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full">
                <Image width={40} height={40} src={"/avatar/people.png"} alt="people" />
              </div>
              <div className="grow">
                <p className="text-sm font-semibold max-w-28 text-ellipsis overflow-hidden whitespace-nowrap">
                  {person?.first_name + " " + person?.last_name}
                </p>
                <p className="text-[10px] text-accent">6 Friends in Common</p>
              </div>
              <Image
                width={20}
                height={25}
                src={"/icons/add_friend.png"}
                alt="people"
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
