import { useRef } from "react";
import { useDispatch } from "react-redux";
import { delFilters } from "../../redux-toolkit/slices/filterSlice";

export const useClearInput = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const inputClear = () => {
    inputRef.current.focus();
    dispatch(delFilters("salary"));
  };

  return { inputRef, inputClear };
};
