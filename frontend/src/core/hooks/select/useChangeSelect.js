import {useState} from "react";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const useChangeSelect = (onSelect,keys,defolt) => {
    const [value, setValue] = useState();

    const onChange = (event) => {
        setValue(event.target.value);
        onSelect(event.target.value);
    };
    const filt = useSelector((state) => state.filter.filters[keys]);


    const filtChange = (filt) => {
        filt ? setValue(filt) : setValue(defolt);
    };

    useEffect(() => filtChange(filt), [filt]);

    return [value, onChange]

}