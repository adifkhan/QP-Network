import React from "react";
import Sponsored from "./Sponsored";
import FriendReq from "./FriendReq";
import Birthdays from "./Birthdays";
import Contacts from "./Contacts";
import Conversations from "./Conversations";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-[2px] py-1">
      <Sponsored />
      <FriendReq />
      <Birthdays />
      <Contacts />
      <Conversations />
    </div>
  );
}
