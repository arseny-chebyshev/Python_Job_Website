import "./select.css";
import { useSelector } from "react-redux";
import { useState } from "react";
const Select = ({ title, option_arr, defolt, onSelect }) => {
  const [value, setValue] = useState();
  const onChange = (event) => {
    setValue(event.target.value);
    onSelect(event.target.value);
  };
  return (
    <>
      <div className="select_title">{title}</div>
      <select placeholder="выберите местоположние" onChange={onChange} value={value} className="select">
        <option>{defolt}</option>
        {option_arr.map((el, i) => (
          <option key={i} className="select__option">
            {el}
          </option>
        ))}
      </select>
    </>
  );
};
export { Select };
