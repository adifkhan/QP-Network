"use client";

import React from "react";
import ViewStorySidebar from "../uiComps/ViewStorySidebar";
import ViewStoryOutlet from "../uiComps/ViewStoryOutlet";

export default function ViewStory({ userId }) {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetch(`/api/single-user-story?userId=${userId}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        if (data?.status === 200) {
          setStories(data?.stories);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <main className="flex" style={{ minHeight: "500px", height: "calc(100vh - 60px)" }}>
      <ViewStorySidebar />
      <ViewStoryOutlet stories={stories} loading={loading} />
    </main>
  );
}
