import "./header.css";
import { useTheme } from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLaptopCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState("");
  const { theme, setTheme } = useTheme(false);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <FontAwesomeIcon className="header__logo-logo" icon={faLaptopCode} />
        </Link>
      </div>
      <FontAwesomeIcon
        className={theme ? "header_bulb-on" : "header_bulb-off"}
        onClick={() => setTheme(!theme)}
        icon={faLightbulb}
      />
      <div className="header__search">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="header__search-input"
          placeholder="Поиск по вакансиям"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={
            value ? "header__search-gosearch" : "header__search-gosearch_noshow"
          }
        />
      </div>
    </div>
  );
};
export { Header };
