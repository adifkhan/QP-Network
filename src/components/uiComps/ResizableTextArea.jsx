import React from "react";

export default function ResizableTextArea({ storyText, setStoryText, placeholder }) {
  const [textareaHeight, setTextareaHeight] = React.useState("auto");
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
  }, [storyText]);

  return (
    <textarea
      ref={textareaRef}
      style={{ height: textareaHeight }}
      rows={1}
      value={storyText}
      onChange={(e) => setStoryText(e.target.value)}
      placeholder={placeholder}
      className="textarea textarea-ghost bg-transparent text-center text-white font-semibold resize-none overflow-y-hidden focus:border-none focus:outline-none"
    />
  );
}
