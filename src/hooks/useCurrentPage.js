import { useState, useEffect } from "react";
export default function useCurrentPage(history) {
  const url = history.location.pathname;
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (url === "/home" || url === "/") {
      setPage("1");
    } else if (url === "/admin") {
      setPage("2");
    } else if (url === "/posts/create") {
      setPage("3");
    }
  }, []);

  history.listen((location, action) => {
    switch (location.pathname) {
      case "/home":
        setPage("1");
        break;
      case "/":
        setPage("1");
        break;
      case "/admin":
        setPage("2");
        break;
      case "/post/create":
        setPage("3");
        break;
      default:
        setPage("1");
        break;
    }
  });

  return page;
}
