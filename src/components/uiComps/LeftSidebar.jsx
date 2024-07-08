import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function LeftSidebar() {
  const { auth } = useSelector((state) => state?.authReducer);
  return (
    <div className="bg-white p-4 text-neutral h-full">
      <div className="flex items-center gap-2 mb-5 cursor-pointer">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
          <Image src={"/avatar/james_rodigan.png"} width="40" height="40" alt="QP Network" />
        </div>
        <p className="text-md font-medium">{auth?.fullName ?? "James Rodigan"}</p>
      </div>
      <div className="flex flex-col gap-5">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:text-accent hover:translate-x-1 duration-150 font-medium hover:font-semibold"
          >
            <Image src={item.icon} width="20" height="20" alt={item.title} />
            <p className="text-sm ">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const menuItems = [
  { title: "Explore", icon: "/icons/explore.png" },
  { title: "Friends", icon: "/icons/friends.png" },
  { title: "Groups", icon: "/icons/groups.png" },
  { title: "Pages", icon: "/icons/pages.png" },
  { title: "Bookmarks", icon: "/icons/bookmarks.png" },
  { title: "Wallet", icon: "/icons/wallet.png" },
  { title: "Market Place", icon: "/icons/market-place.png" },
  { title: "Seller Panel", icon: "/icons/seller-panel.png" },
  { title: "Buyer Panel", icon: "/icons/buyer-panel.png" },
];
