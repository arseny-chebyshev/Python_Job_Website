import "./select.css";
import { useSelector } from "react-redux";
const Select = ({ title, option_arr, defolt,onChange }) => {
  const level = useSelector((el) => el.filter.level);
  return (
    <>
      <div className="select_title">{title}</div>
      <select onChange={onChange} defaultValue={level} className="select" id="select">
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
