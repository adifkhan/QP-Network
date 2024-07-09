import React from "react";
import Loader from "../shared/Loader";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export default function ViewStoryOutlet({ stories, loading }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       if (currentIndex >= stories?.length) {
  //         setCurrentIndex(0);
  //       } else {
  //         setCurrentIndex((prev) => prev + 1);
  //       }
  //     }, 3000);
  //   }, [currentIndex, stories?.length]);

  const goForward = () => {
    if (currentIndex >= stories?.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const goBackward = () => {
    if (currentIndex === 0) {
      setCurrentIndex(stories?.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-black">
      {loading ? (
        <div className="h-screen flex flex-col items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 relative">
          <div
            className={`w-[280px] h-[500px] flex items-center justify-center rounded-sm bg-[${stories?.[currentIndex]?.bgColor}]`}
            style={{
              backgroundImage: `url(${stories?.[currentIndex]?.storyImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="text-white text-sm text-center font-semibold p-2">
              {stories?.[currentIndex]?.storyText}
            </p>
          </div>
          <progress
            className="progress progress-accent w-[260px] h-1 absolute top-4"
            value={40}
            max="100"
          ></progress>
          <section className="w-[280px] flex items-center justify-between text-white px-2 absolute top-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 bg-gray-300 rounded-full cursor-pointer">
                <Image width={28} height={28} src={"/avatar/oval-3.png"} alt="user profile" />
              </div>
              <div>
                <p className="font-medium text-sm cursor-pointer hover:underline">Maynul Islam</p>
                <span className="text-xs">12 hours ago</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[8px] cursor-pointer">● ● ●</p>
              <div className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer">
                <RxCross2 />
              </div>
            </div>
          </section>
          <div className="flex items-center justify-between w-[380px] absolute top-1/2 -translate-y-1/2">
            <div
              onClick={goBackward}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#D9D9D9] cursor-pointer"
            >
              <FaChevronLeft color="#191D23" />
            </div>
            <div
              onClick={goForward}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#D9D9D9] cursor-pointer"
            >
              <FaChevronRight color="#191D23" />
            </div>
          </div>
          <div className="flex items-center gap-2 absolute bottom-2">
            <input
              type="text"
              className="bg-[#EEEEEE]/50  text-sm text-white px-2 py-1 w-28 rounded focus:outline-none"
            />
            <div className="flex items-center gap-1">
              <Image
                width={20}
                height={20}
                src={"/icons/like-react.png"}
                alt="raction"
                className="w-5 h-5 cursor-pointer hover:scale-125"
              />
              <Image
                width={20}
                height={20}
                src={"/icons/love-react.png"}
                alt="raction"
                className="w-5 h-5 cursor-pointer hover:scale-125"
              />
              <Image
                width={20}
                height={20}
                src={"/icons/haha-react.png"}
                alt="raction"
                className="w-5 h-5 cursor-pointer hover:scale-125"
              />
              <Image
                width={20}
                height={20}
                src={"/icons/wow-react.png"}
                alt="raction"
                className="w-5 h-5 cursor-pointer hover:scale-125"
              />
              <Image
                width={20}
                height={20}
                src={"/icons/sad-react.png"}
                alt="raction"
                className="w-5 h-5 cursor-pointer hover:scale-125"
              />
              <Image
                width={20}
                height={20}
                src={"/icons/angry-react.png"}
                alt="raction"
                className="w-5 h-5 cursor-pointer hover:scale-125"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
