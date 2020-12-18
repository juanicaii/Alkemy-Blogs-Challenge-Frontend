import { useState, useEffect } from "react";
import axios from "axios";
export default function useHttp(url, method) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const posts = await axios({
      method: method,
      url: url,
    });
    if (posts) {
      setData(posts.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
