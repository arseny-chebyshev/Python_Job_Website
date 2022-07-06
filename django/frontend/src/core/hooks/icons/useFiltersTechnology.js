import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchOneTechnology = (name) => {
  const [count, setCount] = useState();

  const url = `http://localhost:8000/api/vacancy/?technologies=${name}`;

  const request = async () => {
    const { data } = await axios(url);

    setCount(data.count);
  };

  useEffect(() => {
    request();
  }, []);

  return { count };
};
