import React from "react";

export default function useStory() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("/api/get-stories?userId=668979e6ead17d642758c7db", {
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
  }, []);

  return { stories, loading };
}
