import {useDispatch, useSelector} from "react-redux";
import {useFilters} from "../useFilter";
import {useEffect} from "react";
import {fetchVacansies} from "../../redux-toolkit/slices/vacansiesSlice";

export const useFetchInField = () => {
    const dispatch = useDispatch();

    const vacancy = useSelector((state) => state.vacansies.vacansies);
    const isLoading = useSelector((state) => state.vacansies.isLoading);
    const currentPage = useSelector((state) => state.pagination.currentPage);

    const {
        sortLevel,
        sortMode,
        sortRemote,
        sortSalary,
        sortRelocation,
        sortTechnologies,
        sortSearch
    } = useFilters();

    useEffect(() => {
        dispatch(
            fetchVacansies({
                sortLevel,
                sortMode,
                sortRemote,
                sortSalary,
                currentPage,
                sortTechnologies,
                sortRelocation,
                sortSearch,
            })
        );
    }, [
        sortLevel,
        sortMode,
        sortRemote,
        sortSalary,
        currentPage,
        sortTechnologies,
        sortRelocation,
        sortSearch,
    ]);

    return {vacancy,isLoading}
}
