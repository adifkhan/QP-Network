"use client";

import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { PiFilmReel } from "react-icons/pi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsBox2 } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillBell } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ userMenuOpen, setUserMenuOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/signin");
  };
  return (
    <div
      className="flex items-center gap-2 justify-between h-14 px-4 bg-white shadow-md sticky top-0 right-0 left-0 z-[1000]"
      onClick={() => {
        setUserMenuOpen(false);
      }}
    >
      <section className="w-[80%] flex items-center gap-3">
        <Image src={"/QP-network.png"} width="35" height="35" alt="QP Network" />
        <div className="flex items-center gap-2 px-2 py-1 bg-[#F0F2F5] rounded-full text-neutral">
          <IoSearch />
          <input type="text" placeholder="search" className="bg-transparent focus:outline-none" />
        </div>
      </section>
      <section className="w-full h-full self-end  flex items-center justify-between">
        <div
          className={`flex items-center justify-center w-16 h-full cursor-pointer hover:text-accent border-b-[3px] border-transparent hover:border-accent duration-200 ease-in ${
            pathname === "/" ? "border-b-accent text-accent" : ""
          }`}
        >
          <HiMiniHome size={24} />
        </div>
        <div className="flex items-center justify-center w-16 h-full cursor-pointer hover:text-accent border-b-[3px] border-transparent hover:border-accent duration-200 ease-in">
          <PiFilmReel size={24} />
        </div>
        <div className="flex items-center justify-center w-16 h-full cursor-pointer hover:text-accent border-b-[3px] border-transparent hover:border-accent duration-200 ease-in">
          <FaUsersViewfinder size={24} />
        </div>
        <div className="flex items-center justify-center w-16 h-full cursor-pointer hover:text-accent border-b-[3px] border-transparent hover:border-accent duration-200 ease-in">
          <BsBox2 size={24} />
        </div>
        <div className="flex items-center justify-center w-16 h-full cursor-pointer hover:text-accent border-b-[3px] border-transparent hover:border-accent duration-200 ease-in relative">
          <span className="flex items-center justify-center bg-[#0B3243] rounded-full h-[14px] w-[14px] text-white text-[10px] absolute top-2 right-3">
            3
          </span>
          <MdOutlineShoppingCart size={24} />
        </div>
      </section>
      <section className="w-[60%] flex items-center justify-end gap-6">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 cursor-pointer">
          <RiMessengerFill size={18} color="#191D23" />
        </div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 cursor-pointer">
          <AiFillBell size={18} color="#191D23" className="-rotate-12" />
        </div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setUserMenuOpen(!userMenuOpen);
            }}
            className="cursor-pointer"
          >
            <Image src={"/james_rodigan.png"} width="30" height="30" alt="QP Network" />
            <div className="rounded-full bg-gray-300 absolute right-0 bottom-0">
              <IoIosArrowDown size={14} color="#191D23" />
            </div>
          </div>
          <div
            className={`${
              userMenuOpen ? "block" : "hidden"
            } text-neutral px-8 py-4 rounded-md border-[1px] bg-gray-200 shadow-md absolute right-0 top-[44px]`}
          >
            <ul className="flex flex-col gap-3">
              <li className="font-semibold cursor-pointer hover:text-accent">Profile</li>
              <li className="font-semibold cursor-pointer hover:text-accent">Setting</li>
              <li onClick={handleLogout} className="font-semibold cursor-pointer hover:text-accent">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
