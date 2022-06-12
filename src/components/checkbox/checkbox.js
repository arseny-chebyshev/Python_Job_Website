import { useState } from "react";

import "./checkbox.css";
const Checkbox = ({ title, clickCheck }) => {
  const [check, setCheck] = useState(false);
  const goCheck = () => {
    setCheck(!check);
    clickCheck(!check);
  };
  return (
    <div className="checkbox">
      <input
        onChange={goCheck}
        className="checkbox__input"
        type="checkbox"
        checked={check}
      />
      <span className="checkbox__title">{title}</span>
    </div>
  );
};
export { Checkbox };
