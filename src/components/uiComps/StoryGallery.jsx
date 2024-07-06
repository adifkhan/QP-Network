import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export default function StoryGallery() {
  const router = useRouter();
  return (
    <div className="bg-white rounded-sm px-3 pt-4 pb-5 relative">
      <div className="flex items-start justify-around">
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={215}
            src={"/story-1.jpg"}
            alt="people"
            className="rounded-xl  cursor-pointer"
          />
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
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={215}
            src={"/story-2.png"}
            alt="people"
            className="rounded-xl cursor-pointer"
          />
          <div className="mt-[-20px] flex flex-col items-center cursor-pointer">
            <Image width={40} height={40} src={"/avatar/oval-1.png"} alt="icon" />
            <p className="text-xs text-neutral">Vish Patil</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={215}
            src={"/story-3.png"}
            alt="people"
            className="rounded-xl cursor-pointer"
          />
          <div className="mt-[-20px]  flex flex-col items-center cursor-pointer">
            <Image width={40} height={40} src={"/avatar/oval-2.png"} alt="icon" />
            <p className="text-xs text-neutral">Rakesh Shetty</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={215}
            src={"/story-4.png"}
            alt="people"
            className="rounded-xl cursor-pointer"
          />
          <div className="mt-[-20px]  flex flex-col items-center cursor-pointer">
            <Image width={40} height={40} src={"/avatar/oval-3.png"} alt="icon" />
            <p className="text-xs text-neutral">Akash Bolre</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white absolute right-5 top-[40%] cursor-pointer">
        <FaChevronRight color="#191D23" />
      </div>
    </div>
  );
}
