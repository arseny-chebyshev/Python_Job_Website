import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const useChangeCheckbox = (funcProps, keys) => {
  const [check, setCheck] = useState();

  const goCheck = () => {
    setCheck(!check);
    funcProps(!check);
  };

  const filt = useSelector((state) => state.filter.filters[keys]);

  useEffect(() => setCheck(filt), [filt]);

  return { filt, goCheck };
};
