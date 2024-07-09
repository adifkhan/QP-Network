import useSuggestions from "@/hooks/useSuggestions";
import Image from "next/image";
import React from "react";

export default function ViewStorySidebar() {
  const { suggestions, loading } = useSuggestions();
  return (
    <div className="bg-white text-neutral px-4 py-5 w-[300px] h-full  overflow-y-scroll">
      <h4 className="font-semibold text-xl">All stories</h4>
      <div className="flex flex-col gap-2 mt-3">
        {suggestions?.slice(0, 30)?.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <Image width={40} height={40} src={"/avatar/story-viewer.png"} alt="story viewer" />
            </div>
            <div className="grow">
              <p className="text-sm font-semibold max-w-28 text-ellipsis overflow-hidden whitespace-nowrap">
                {item?.first_name + " " + item?.last_name}
              </p>
              <p className="text-[10px] text-accent">12h</p>
            </div>
            {index <= 7 ? (
              <div className="flex gap-1">
                <Image
                  width={20}
                  height={20}
                  src={"/icons/love-react.png"}
                  alt="raction"
                  className="w-5 h-5 cursor-pointer"
                />
                <Image
                  width={20}
                  height={20}
                  src={"/icons/love-react.png"}
                  alt="raction"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
// {index < 7 ? (
//   <Image
//     width={20}
//     height={20}
//     src={"/icons/love-react.png"}
//     alt="raction"
//     className="w-5 h-5 cursor-pointer"
//   />
// ) : (
//   <div></div>
// )}
// }
