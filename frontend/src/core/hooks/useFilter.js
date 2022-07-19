import {useSelector} from "react-redux";

export const useFilters = () => {
    const pick = useSelector((state) => state.filter.filters);

    const sortLevel =
        pick.qualification && pick.qualification !== "Любая"
            ? `&skill=${pick.qualification}`
            : "";
    const sortMode =
        pick.mode && pick.mode !== "Любой" ? `&employment=${pick.mode}` : "";
    const sortRemote = pick.remote ? `&remote=true` : "";
    const sortSalary = pick.salary ? `&salary_above=${pick.salary}` : "";
    const sortRelocation = pick.relocation ? `&relocation=true` : "";
    const sortSearch = pick.search ? `&search=${pick.search}` : "";
    const sortTechnologies = pick.technologies
        ? `&technologies=${pick.technologies}`
        : "";

    return {
        sortLevel,
        sortMode,
        sortRemote,
        sortSalary,
        sortRelocation,
        sortTechnologies,
        pick,
        sortSearch,
    };
};
