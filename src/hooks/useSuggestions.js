import React from "react";
import Cookies from "universal-cookie";

export default function useSuggestions() {
  const [suggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  React.useEffect(() => {
    if (token) {
      setLoading(true);
      fetch("https://quantumpossibilities.eu:82/api/suggestion-list", {
        headers: { "Content-Type": "application/json", authorization: `bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          if (data?.status === 200) {
            setSuggestions(data?.userlist);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [token]);

  return { suggestions, loading };
}
