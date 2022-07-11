import styles from "./searchField.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useChangeSearch} from "../../core/hooks/search/useChangeSearch";

const SearchField = () => {

    const {value,searchCheck} = useChangeSearch()
    return (
            <input
                value={value}
                onChange={searchCheck}
                className={styles.search_input}
                placeholder="Должность, ключевые слова, компания"
            />
    );
};
export {SearchField};

