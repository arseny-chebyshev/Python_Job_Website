import "./select.css";
import { IoIosArrowDown } from "react-icons/io";
const Select = ({ title, option_arr, defolt }) => {
  return (
    <>
      <div className="select_title">{title}</div>
      <select className="select" id="select">
        <option>{defolt}</option>
        {option_arr.map((el, i) => (
          <option key={i} className="select__option">
            {el}
          </option>
        ))}
      </select>
      {/* <label className="select_arrow" for="select">
        <IoIosArrowDown size={18} />
      </label> */}
    </>
  );
};
export { Select };
