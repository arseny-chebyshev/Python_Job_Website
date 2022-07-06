import styles from "./searchField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SearchField = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.search}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.search_input}
        placeholder="Поиск"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={value ? `${styles.gosearch}` : `${styles.gosearchnoshow}`}
      />
    </div>
  );
};
export { SearchField };
