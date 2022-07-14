import debounce from "lodash.debounce";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../redux-toolkit/slices/filterSlice";


export const useChangeSearch = () => {

    const search = useSelector((state) => state.filter.filters.search);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const testDebounce = useCallback(
        debounce((str) => {
            dispatch(setSearch(str));
        }, 500),
        []
    );


    const checkSeacrh = (search) => {
        if (!search) setValue("");
    };

    useEffect(() => checkSeacrh(search), [search])


    const searchCheck = (event) => {
        setValue(event.target.value)
        testDebounce(event.target.value)
    };


    return {value, searchCheck};
};
