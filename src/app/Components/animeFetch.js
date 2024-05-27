"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAnimeData = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for ID:", id);
        const res = await axios.get(
          `http://localhost:3000/api/title?_id=${id}`
        );
        console.log("Response data:", res.data);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [id]);

  return { data };
};

export default useFetchAnimeData;
