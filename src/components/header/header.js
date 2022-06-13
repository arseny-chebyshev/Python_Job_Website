import "./header.css";
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
  useEffect(() => console.log(typeof theme), [theme]);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <FontAwesomeIcon className="header__logo-logo" icon={faLaptopCode} />
        </Link>
      </div>
      {theme !== "false" ? (
        <img
          onClick={() => setTheme("false")}
          className="moon-icons"
          src="./image/image-app/moon.png"
        />
      ) : (
        <img
          onClick={() => setTheme("true")}
          className="sun-icons"
          src="./image/image-app/sunny.png"
        />
      )}
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
