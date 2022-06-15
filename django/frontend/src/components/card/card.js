import styles from "./card.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Card = ({
  role,
  min_salary,
  max_salary,
  level,
  location,
  technologies,
}) => {
  const [showButton, setshowButton] = useState(false);
  const checkSalary = (min_salary, max_salary) => {
    let str;
    if (+min_salary && +max_salary) {
      str = `от ${min_salary / 1000}.000 до ${max_salary / 1000}.000 ₽`;
    } else if (!+max_salary) {
      str = `от ${+min_salary / 1000}.000 ₽`;
    } else {
      str = `до ${+max_salary / 1000}.000 ₽`;
    }
    return str;
  };
  return (
    <div
      className={styles.card}
      onMouseEnter={() => setshowButton(true)}
      onMouseLeave={() => setshowButton(false)}
    >
      <div className={styles.role}>
        <span className={styles.role_title}>
          <div className={styles.mode}>{level}</div>
          &nbsp;{role}
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.salary}>
          💵 {checkSalary(min_salary, max_salary)}
        </div>
        <div className={styles.location}>
          <span className={styles.location_title}>📍 </span>
          <span className={styles.location_title}>{location}</span>
        </div>
        <div className={styles.technology}>
          <span className={styles.technology_title}>🖥️ </span>
          <span>
            {technologies.map((el, i) =>
              i == technologies.length - 1 ? (
                <span key={i}>{el}</span>
              ) : (
                <span key={i}>{el}, </span>
              )
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
export { Card };
