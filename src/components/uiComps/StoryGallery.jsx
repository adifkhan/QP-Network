import Image from "next/image";
import { useRouter } from "next/navigation";
import useStory from "@/hooks/useStory";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa6";

export default function StoryGallery() {
  const router = useRouter();
  const { auth } = useSelector((state) => state?.authReducer);
  const { myStories, otherStories } = useStory();

  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Amount to scroll in pixels
      if (direction === "forward") {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (direction === "backward") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-white rounded-sm px-3 pt-4 pb-5 relative">
      <div
        className="flex items-start justify-start gap-3 overflow-hidden"
        ref={scrollContainerRef}
      >
        <div className="flex flex-col items-center">
          <div
            className="w-[150px] h-[215px] flex items-center justify-center rounded-xl"
            style={{
              backgroundImage: `url(${"/story-2.png"})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="mt-[-20px] cursor-pointer">
            <Image
              width={40}
              height={40}
              src={"/icons/create-2.png"}
              alt="icon"
              onClick={() => router.push("create-story")}
            />
          </div>
        </div>
        {myStories.length > 0 && (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push(`/view-story/${myStories?.[0]?.user_id}`)}
          >
            <div
              className={`w-[150px] h-[215px] flex items-center justify-center rounded-xl bg-[${myStories?.[0]?.bgColor}]`}
              style={{
                backgroundImage: `url(${myStories?.[0]?.storyImage})`,
                backgroundSize: `${myStories?.[0]?.storyImage}% ${myStories?.[0]?.storyImage}%`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <p className="text-white text-sm text-center font-semibold p-2">
                {myStories?.[0]?.storyText}
              </p>
            </div>
            <div className="mt-[-20px] flex flex-col items-center cursor-pointer">
              <Image width={40} height={40} src={"/avatar/oval-1.png"} alt="icon" />
              <p className="text-xs text-neutral">{auth?.fullName ?? "Maynul Islam"}</p>
            </div>
          </div>
        )}
        {otherStories?.length > 0 &&
          otherStories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => router.push(`/view-story/${story?.stories?.[0]?.user_id}`)}
            >
              <div
                className={`w-[150px] h-[215px] flex items-center justify-center rounded-xl bg-[${story?.stories?.[0]?.bgColor}]`}
                style={{
                  backgroundImage: `url(${story?.stories?.[0]?.storyImage})`,
                  backgroundSize: `${story?.stories?.[0]?.storyImage}% ${story?.stories?.[0]?.storyImage}%`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-white text-sm text-center font-semibold p-2">
                  {story?.stories?.[0]?.storyText}
                </p>
              </div>
              <div className="mt-[-20px] flex flex-col items-center cursor-pointer">
                <Image width={40} height={40} src={"/avatar/oval-1.png"} alt="icon" />
                <p className="text-xs text-neutral">Adif Khan</p>
              </div>
            </div>
          ))}
      </div>
      <div
        onClick={() => scroll("backward")}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-white absolute left-3 top-[40%] cursor-pointer"
      >
        <FaChevronLeft color="#191D23" />
      </div>
      <div
        onClick={() => scroll("forward")}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-white absolute right-3 top-[40%] cursor-pointer"
      >
        <FaChevronRight color="#191D23" />
      </div>
    </div>
  );
}
