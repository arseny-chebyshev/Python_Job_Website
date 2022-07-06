import { useSelector } from "react-redux";

export const useCountFiters = () => {
  const countFilters = Object.keys(
    useSelector((state) => state.filter.filters)
  ).length;

  return { countFilters };
};
