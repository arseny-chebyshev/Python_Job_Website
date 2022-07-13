import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useChangeCheckbox } from "../../core/hooks/checkbox/useChangeCheckbox";
import styles from "./checkbox.module.css";
const Checkbox = ({ title, clickCheck, keys }) => {
  const { filt, goCheck } = useChangeCheckbox(clickCheck,keys);

  return (
    <button
      className={filt ? styles.checkbox_active : styles.checkbox}
      value={filt}
      onClick={goCheck}
    >
      {title}
    </button>
  );
};
export { Checkbox };
