import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  comma, getNormalDate, getNormalSalary
} from "../../core/helpers/cardHelpers";
import styles from "./card.module.css";
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
  desc,
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
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.salary}>
            {getNormalSalary(min_salary, max_salary, currency)}
          </div>
          <div className={styles.desc}>{desc}</div>
          <div className={styles.location}>
            <FontAwesomeIcon className={styles.smile} icon={faLocationDot} />
            <div>{location}</div>
          </div>
          <div className={styles.technologies}>{comma(technologies)}</div>
          <div className={styles.add}>
            {`#${employment}`}
            {remote && " #Можно удалённо"}
            {relocation && " #Возможна релокация"}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };

