import debounce from "lodash.debounce";
import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const useChangeInput = (goSalary) => {
    const filt = useSelector((state) => state.filter.filters.salary);

    const [salary, setSalary] = useState(filt || "");

    const testDebounce = useCallback(
        debounce((str) => {
            goSalary(str);
        }, 400),
        []
    );

    const filtChange = (filt) => {
        if (!filt) setSalary("");
    };

    const inputChange = (event) => {
        const str = (event.target.value).replace(/\D/g, '')
        if (str) {
            setSalary(str);
            testDebounce(str);
        }
    };

    useEffect(() => filtChange(filt), [filt]);

    return {salary, inputChange};
};
