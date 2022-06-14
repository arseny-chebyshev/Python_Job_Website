import styles from "./card.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Card = ({ i, role, salary, mode, location, technology, level }) => {
  const [showButton, setshowButton] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setshowButton(true)}
      onMouseLeave={() => setshowButton(false)}
    >
      <Link to={`/${i}`}>
        <div className={styles.role}>
          <span className={styles.role_title}>{role}</span>
        </div>
      </Link>
      <div className={styles.info}>
        <div className={styles.salary}>{salary}₽</div>
        <div className={styles.mode}>{level}</div>
        <div className={styles.mode}>{mode}</div>
        <div className={styles.location}>
          <span className={styles.location_title}>Локация: </span>
          <span className={styles.location_title}>{location}</span>
        </div>
        <div className={styles.technology}>
          <span className={styles.technology_title}>Технологии: </span>
          <span>
            {technology.map((el, i) =>
              i == technology.length - 1 ? (
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
