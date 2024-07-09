import useSuggestions from "@/hooks/useSuggestions";
import Image from "next/image";
import React from "react";
import Loader from "../shared/Loader";

export default function SuggestedPage() {
  const { suggestions, loading } = useSuggestions();
  return (
    <div className="bg-white text-neutral px-2 py-3 rounded min-h-[250px]">
      <h4 className="font-semibold text-sm text-center">Pages You Might Like</h4>
      {loading ? (
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3 ">
          {suggestions?.slice(0, 4)?.map((page, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full">
                <Image width={40} height={40} src={"/avatar/oval-1.png"} alt="page" />
              </div>
              <div className="grow">
                <p className="text-sm font-semibold max-w-24 text-ellipsis overflow-hidden whitespace-nowrap">
                  {page?.first_name + " " + page?.last_name}
                </p>
                <p className="text-[10px] text-accent">Fassion Brand</p>
              </div>
              <button className="btn min-h-6 h-6 bg-accent text-white text-xs font-normal border-none rounded-sm px-2">
                Follow
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
