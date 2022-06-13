import styles from "./header.module.css";
import { useTheme } from "../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState("");
  const { theme, setTheme } = useTheme();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <FontAwesomeIcon className={styles.logo_logo} icon={faLaptopCode} />
        </Link>
      </div>
      <div className={styles.search}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={styles.search_input}
          placeholder="Поиск по вакансиям"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={
            value ? `${styles.gosearch}` : `${styles.gosearchnoshow}`
          }
        />
      </div>
      {theme !== "false" ? (
        <img
          onClick={() => setTheme("false")}
          className={styles.moon}
          src="./image/image-app/moon.png"
        />
      ) : (
        <img
          onClick={() => setTheme("true")}
          className={styles.sun}
          src="./image/image-app/sunny.png"
        />
      )}
    </div>
  );
};
export { Header };
