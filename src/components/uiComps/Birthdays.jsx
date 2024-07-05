import Image from "next/image";
import React from "react";

export default function Birthdays() {
  return (
    <div className="bg-white text-neutral p-2 rounded">
      <h4 className="font-semibold text-sm">Birthdays</h4>
      <div className="flex items-center gap-1  my-3">
        <Image width={40} height={40} src={"/icons/birthday.png"} alt="birthday cake" />
        <p className="text-xs">
          <span className="font-semibold">Ibn Lokman</span> and{" "}
          <span className="font-semibold">3 others</span> have birthdays today.
        </p>
      </div>
    </div>
  );
}
