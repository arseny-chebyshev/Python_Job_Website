import { useSelector } from "react-redux";

export const useFilters = () => {
  const level = useSelector((state) => state.filter.qualification);
  const mode = useSelector((state) => state.filter.mode);
  const remote = useSelector((state) => state.filter.remote);
  const salary = useSelector((state) => state.filter.salary);

  const sortLevel = level && level !== "Любая" ? `&skill=${level}` : "";
  const sortMode = mode && mode !== "Любой" ? `&employment=${mode}` : "";
  const sortRemote = remote ? `&remote=true` : "";
  const sortSalary = salary && +salary > 30000 ? `&salary_above=${salary}` : "";

  return { sortLevel, sortMode, sortRemote, sortSalary };
};
