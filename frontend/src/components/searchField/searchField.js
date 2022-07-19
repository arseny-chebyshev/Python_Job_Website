import styles from "./searchField.module.css";
import {useChangeSearch} from "../../core/hooks/search/useChangeSearch";
import {memo} from "react";

const SearchField = memo(() => {

    const {value,searchCheck} = useChangeSearch()


    return (
            <input
                value={value}
                onChange={searchCheck}
                className={styles.search_input}
                placeholder="Должность, ключевые слова, компания"
            />
    );
});
export {SearchField};

