import React from "react";
import SuggestionSlider from "./SuggestionSlider";
import SuggestedPage from "./SuggestedPage";
import SuggestedPeople from "./SuggestedPeople";
import Sponsored from "./Sponsored";

const slides = [
  { url: "/image-1.jpg" },
  { url: "http://localhost:3000/image-2.jpg" },
  { url: "http://localhost:3000/image-3.jpg" },
  { url: "http://localhost:3000/image-4.jpg" },
];

export default function SuggestionsBar() {
  return (
    <div className="flex flex-col gap-2 py-2">
      <SuggestionSlider slides={slides} />
      <SuggestedPage />
      <SuggestedPeople />
      <Sponsored />
    </div>
  );
}
