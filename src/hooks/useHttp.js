import { useState, useEffect } from "react";
import axios from "axios";
import status from "../utils/status";
import config from "../react.config";
export default function useHttp(url, method) {
  const [data, setData] = useState([]);
  const route = config.api === "express";

  const fetchData = async () => {
    const posts = await axios({
      method: method,
      url: url,
    });

    if (posts.status === status.Ok) {
      setData(route ? posts.data.content : posts.data);
      console.log(posts.data.content);
    } else {
      setData(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
}
