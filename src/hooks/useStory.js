import { useAppSelector } from "@/redux/store";
import React from "react";

export default function useStory() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { auth } = useAppSelector((state) => state.authReducer);

  React.useEffect(() => {
    setLoading(true);
    fetch(`/api/get-stories?userId=${auth?._id ?? "66878e4544edc6fbb5f548c1"}`, {
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
  }, [auth?._id]);

  return { stories, loading };
}
