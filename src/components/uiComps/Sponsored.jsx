import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sponsored() {
  return (
    <div className="bg-white text-neutral p-2 rounded">
      <h4 className="font-semibold text-sm">Sponsored</h4>
      <div className="flex flex-col gap-3 my-3">
        <div className="flex items-center gap-1">
          <Image width={70} height={70} src={"/sponsored-1.png"} alt="sponsored" />
          <div>
            <p className="text-xs">আপনার অফিসের লাঞ্চ</p>
            <Link href={"/"} className="text-[10px] ">
              homefectionery.com
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Image width={70} height={70} src={"/sponsored-2.png"} alt="sponsored" />
          <div>
            <p className="text-xs">SEMrush এর সাথে Ubersuggest</p>
            <Link href={"/"} className="text-[10px] ">
              https://groupbuyservices.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
