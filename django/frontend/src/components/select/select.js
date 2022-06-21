import styles from "./select.module.css";
import { useState } from "react";
const Select = ({ title, option_arr, defolt, onSelect }) => {
  const [value, setValue] = useState();
  const onChange = (event) => {
    setValue(event.target.value);
    onSelect(event.target.value);
  };
  return (
      <div>
      <div className={styles.title}>{title}</div>
      <select onChange={onChange} value={value} className={styles.select}>
        <option>{defolt}</option>
        {option_arr.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
    </div>
  );
};
export { Select };
