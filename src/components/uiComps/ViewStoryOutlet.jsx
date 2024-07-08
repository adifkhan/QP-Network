import loading from "@/app/(private)/loading";
import React from "react";
import Loader from "../shared/Loader";

export default function ViewStoryOutlet({ stories, loading }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  console.log(currentIndex);

  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       if (currentIndex >= stories?.length) {
  //         setCurrentIndex(0);
  //       } else {
  //         setCurrentIndex((prev) => prev + 1);
  //       }
  //     }, 3000);
  //   }, [currentIndex, stories?.length]);

  return (
    <div className="w-full bg-black">
      <div className="h-full flex flex-col items-center justify-center pt-4">
        {loading ? (
          <Loader />
        ) : (
          <div
            className={`w-[250px] h-[430px] flex items-center justify-center rounded-sm bg-[${stories?.[currentIndex]?.bgColor}]`}
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
        )}
      </div>
    </div>
  );
}
