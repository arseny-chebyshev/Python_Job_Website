import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../constants/api";
export const useFetchOneTechnology = (name) => {
  const [count, setCount] = useState();

  const url = BaseURL + `vacancy/?technologies=${name}`;

  const request = async () => {
    const { data } = await axios(url);

    setCount(data.count);
  };

  useEffect(() => {
    request();
  }, []);

  return { count };
};
