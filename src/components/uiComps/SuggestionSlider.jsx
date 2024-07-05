"use client";

import React, { useState } from "react";

export default function SuggestionSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[310px]">
      <div className="relative h-[280px]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-sm bg-cover bg-center"
        >
          <div className="absolute bottom-0  w-full">
            <p className="text-white text-xs font-light absolute bottom-6 right-1 left-1">
              Karabakh humanitarian fears grow with thousands sleeping on Stepanakert streets
            </p>
            <button className="btn bg-white text-neutral min-h-4 h-6 px-2 text-xs border-none hover:bg-white absolute right-1 bottom-1">
              See More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`${
                currentIndex === slideIndex ? "text-gray-600" : ""
              } mx-[3px] cursor-pointer text-[20px]`}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
