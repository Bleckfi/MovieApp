import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchAnimeData = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/api/title?_id=${id}`);
      setData(res.data);
    };

    fetchData();
  }, [id]);

  return { data };
};
