import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Conversations() {
  return (
    <div className="bg-white text-neutral px-2 py-3 rounded">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">Group Conversations</h4>
        <IoSearch size={18} color="#AEB1B5" className="mr-2" />
      </div>
      <div className="mt-4 flex flex-col gap-3 ">
        <div className="flex items-center  gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <Image width={30} height={30} src={"/contact.png"} alt="people" />
          </div>
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            3 Idiots
          </p>
        </div>
        <div className="flex items-center  gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <Image width={30} height={30} src={"/james_rodigan.png"} alt="people" />
          </div>
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            NZS Batch 16
          </p>
        </div>
        <div className="flex items-center  gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <Image width={30} height={30} src={"/friend_req.png"} alt="people" />
          </div>
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            Developers Conversation
          </p>
        </div>
        <div className="flex items-center  gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <Image width={32} height={32} src={"/icons/create.png"} alt="people" />
          </div>
          <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            Create new group
          </p>
        </div>
      </div>
    </div>
  );
}
