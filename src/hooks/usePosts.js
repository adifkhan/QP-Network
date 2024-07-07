import React from "react";
import Cookies from "universal-cookie";

export default function usePosts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  React.useEffect(() => {
    if (token) {
      setLoading(true);
      fetch("https://quantumpossibilities.eu:82/api/get-all-users-posts?pageNo=1&pageSize=10", {
        headers: { "Content-Type": "application/json", authorization: `bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          if (data?.status === 200) {
            setPosts(data?.posts);
          }
          setLoading(false);
        });
    }
  }, [token]);

  return { posts, loading };
}
