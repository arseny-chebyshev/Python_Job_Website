import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcReadingEbook } from "react-icons/fc";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [value, setValue] = useState("");
  const inputCheck = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <FontAwesomeIcon className="header__logo-logo" icon={faLaptopCode} />
      </div>
      <div className="header__search">
        <input
          value={value}
          onChange={inputCheck}
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
