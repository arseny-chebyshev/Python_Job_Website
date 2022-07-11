import styles from "./select.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Select = ({ title, option_arr, defolt, onSelect, keys }) => {
  const [value, setValue] = useState();
  const filt = useSelector((state) => state.filter.filters[keys]);

  const onChange = (event) => {
    setValue(event.target.value);
    onSelect(event.target.value);
  };

  const filtChange = (filt) => {
    filt ? setValue(filt) :  setValue(defolt);
  };

  useEffect(() => filtChange(filt), [filt]);

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <select onChange={onChange} value={value} className={styles.select}>
        <option>{defolt}</option>
        {option_arr.map((el, i) => (
          <option value={el.notfull} key={i}>{el.full}</option>
        ))}
      </select>
    </div>
  );
};
export { Select };
