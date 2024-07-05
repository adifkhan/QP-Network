import React from "react";

export default function useSuggestions() {
  const [suggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, []);

  React.useEffect(() => {
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
        setLoading(false);
      });
  }, [token]);

  return { suggestions, loading };
}
