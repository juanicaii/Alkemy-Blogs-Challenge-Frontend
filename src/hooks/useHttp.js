import { useState, useEffect } from "react";
import axios from "axios";
import status from "../utils/status";

export default function useHttp(url, method) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const posts = await axios({
        method: method,
        url: url,
      });

      if (posts.status === status.Ok) {
        setData(posts.data);
      }
    } catch (error) {
      setData(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
}
