import { useState } from "react";
import styles from "./input.module.css";
const Input = ({ title, goSalary }) => {
  const [salary, setSalary] = useState();
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.input}>
        <input
          onChange={(event) => {
            const str = event.target.value.replace(/\D/g, "");
            setSalary(str);
            goSalary(str);
          }}
          value={salary}
          className={styles.input_input}
          placeholder="От"
        />
        <div
          onClick={() => setSalary("")}
          className={salary ? styles.clear : styles.clearNone}
        >
          ×
        </div>
      </div>
    </div>
  );
};
export { Input };
