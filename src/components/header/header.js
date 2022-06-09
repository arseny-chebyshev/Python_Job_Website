import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcReadingEbook } from "react-icons/fc";
import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState("");
  const inputCheck = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <FcReadingEbook className="header__logo-logo" size={70} />
      </div>
      <div className="header__search">
        <input
          value={value}
          onChange={inputCheck}
          className="header__search-input"
          placeholder="Поиск по вакансиям"
        />
        <AiOutlineSearch
          onClick={null}
          size={27}
          className={
            value ? "header__search-gosearch" : "header__search-gosearch_noshow"
          }
        />
      </div>
    </div>
  );
};
export { Header };
