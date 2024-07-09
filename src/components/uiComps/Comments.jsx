import React from "react";
import Image from "next/image";
import { TbArrowsUpRight } from "react-icons/tb";
import CommentReply from "./CommentReply";

export default function Comments({ comment }) {
  const [viewReply, setViewReply] = React.useState(false);

  return (
    <div>
      <div className="flex gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
          <Image width={40} height={40} src={"/avatar/reply_image.png"} alt="user profile" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-3">
            <div className="w-full bg-[#F0F2F5] p-4 text-neutral rounded-xl relative">
              <p className="font-semibold cursor-pointer hover:underline">
                {comment?.user_id?.first_name + " " + comment?.user_id?.last_name}
              </p>
              <p className="text-sm mt-1">{comment?.comment_name}</p>
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
                <span className="text-sm">25</span>
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
          <div>
            {viewReply ? (
              <div>
                <div className=" cursor-pointer" onClick={() => setViewReply(false)}>
                  <p className="text-sm hover:underline">Hide Replay</p>
                </div>
                {comment?.replies?.map((reply) => (
                  <CommentReply key={reply?._id} reply={comment?.replies} />
                ))}
              </div>
            ) : (
              <div className="flex items-end cursor-pointer" onClick={() => setViewReply(true)}>
                <TbArrowsUpRight size={24} />
                <p className="text-sm hover:underline">View {comment?.replies?.length} Replay</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* handle multi-level comments with recursion*/}
      {/* {viewReply && <Comments comment={{}} />} */}
    </div>
  );
}
