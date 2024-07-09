import React from "react";
import Image from "next/image";

export default function CommentReply({ reply }) {
  return (
    <div>
      <div className="flex gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
          <Image width={40} height={40} src={"/avatar/reply_image.png"} alt="user profile" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-3">
            <div className="w-full bg-[#F0F2F5] p-4 text-neutral rounded-xl relative">
              <p className="font-semibold cursor-pointer hover:underline">Brooklyn Simmons</p>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a laoreet tortor.
                Duis malesuada nunc sed faucibus pellentes Proin odio nulla, rhoncus in dictum in,
                tincidunt vel l
              </p>
              <div className="flex items-center gap-[2px] bg-white cursor-pointer w-fit px-1 py-[2px] rounded-full shadow-lg absolute bottom-[-12px] right-10">
                <div className="flex">
                  <Image
                    width={18}
                    height={18}
                    src={"/icons/like-react.png"}
                    alt="like emoji"
                    className="z-20"
                  />
                  <Image
                    width={18}
                    height={18}
                    src={"/icons/love-react.png"}
                    alt="love emoji"
                    className="ml-[-4px] z-10"
                  />
                </div>
                <span className="text-sm">15</span>
              </div>
            </div>
            <div className="w-7 h-7 bg-[#F0F2F5] rounded-full flex justify-center items-center">
              <p className="text-[8px] text-[#999999] cursor-pointer whitespace-nowrap">● ● ●</p>
            </div>
          </div>
          <div className="flex gap-5 text-neutral text-sm font-semibold py-1 px-5">
            <span>1 h</span>
            <span>Like</span>
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
}
