import useSuggestions from "@/hooks/useSuggestions";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Loader from "../shared/Loader";

export default function Contacts() {
  const { suggestions, loading } = useSuggestions();
  return (
    <div className="bg-white text-neutral px-2 py-3 rounded min-h-[250px]">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">Contacts</h4>
        <IoSearch size={18} color="#AEB1B5" className="mr-2" />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 flex flex-col gap-3 ">
          {suggestions?.slice(0, 9)?.map((person, index) => (
            <div key={index} className="flex items-center  gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
                <Image width={30} height={30} src={"/contact.png"} alt="people" />
              </div>
              <p className="grow text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                {person?.first_name + " " + person?.last_name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
