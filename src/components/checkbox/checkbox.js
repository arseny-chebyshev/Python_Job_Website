import { useState } from "react";
import styles from "./checkbox.module.css";
const Checkbox = ({ title, clickCheck }) => {
  const [check, setCheck] = useState(false);
  const goCheck = () => {
    setCheck(!check);
    clickCheck(!check);
  };
  return (
    <div className={styles.checkbox}>
      <input
        onChange={goCheck}
        className={styles.input}
        type="checkbox"
        checked={check}
      />
      <span className={styles.title}>{title}</span>
    </div>
  );
};
export { Checkbox };
