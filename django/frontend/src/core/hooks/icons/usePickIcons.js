import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTechnologies } from "../../redux-toolkit/slices/filterSlice";

export const usePickIcons = (name) => {
  const [pick, setPick] = useState(false);

  const dispatch = useDispatch();

  const goClick = () => () => {
    setPick(!pick);
    dispatch(setTechnologies({ name, pick: !pick }));
  };

  const filt = useSelector((state) => state.filter.filters.technologies);

  const filtCheck = (filt) => {
    filt !== name ? setPick(false) : setPick(true);
  };

  useEffect(() => {
    filtCheck(filt);
  }, [filt]);
  return { pick, goClick };
};
