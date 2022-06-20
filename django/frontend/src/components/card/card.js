import styles from "./card.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  getNormalDate,
  getNormalEmployment,
  getNormalSalary
} from "../../core/helpers/cardHelpers";
import {
  faLocationDot,
  faMoneyCheckDollar,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({
  role,
  min_salary,
  max_salary,
  skill,
  location,
  technologies,
  employment,
  remote,
  relocation,
  id,
  currency,
  date,
}) => {
  const [showButton, setshowButton] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setshowButton(true)}
      onMouseLeave={() => setshowButton(false)}
    >
      <div className={styles.header}>
        <Link className={styles.role_title} to={`/vacancy/${id}`}>
          {role} {skill}
        </Link>
        <div className={styles.date}>{getNormalDate(date)}</div>
      </div>
      <div className={styles.add}>
        {getNormalEmployment(employment)}
        {remote && " #Можно удалённо"}
        {relocation && " #Возможна релокация"}
      </div>
      <div className={styles.main}>
        <div>
          <div className={styles.smile}>
            <FontAwesomeIcon
              className={styles.smileSalary}
              icon={faMoneyCheckDollar}
            />
          </div>
          <div className={styles.smile}>
            <FontAwesomeIcon className={styles.smile} icon={faLocationDot} />
          </div>
          <div className={styles.smile}>
            <FontAwesomeIcon
              className={styles.smileTechnologies}
              icon={faCode}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.salary}>
            {getNormalSalary(min_salary,max_salary,currency)}
          </div>
          <div className={styles.location}>{location}</div>
          <div className={styles.technologies}>
            {technologies.map((el, i) =>
              i == technologies.length - 1 ? (
                <span key={i}>{el}</span>
              ) : (
                <span key={i}>{el}, </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
