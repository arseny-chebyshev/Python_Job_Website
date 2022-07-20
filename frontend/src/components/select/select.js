import styles from "./select.module.css";
import {memo} from "react";
import {useChangeSelect} from "../../core/hooks/select/useChangeSelect";


const Select = memo(({ title, option_arr, defolt, onSelect, keys }) => {

  const [value,onChange] = useChangeSelect(onSelect,keys,defolt)



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
});
export { Select };
