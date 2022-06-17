import { useEffect, useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import styles from "./vacancy.module.css";
import { useParams } from "react-router-dom";
const Vacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState({});
  const url = `http://localhost:8000/api/vacancy/${id}/`;
  const fetchAsycn = async () => {
    const vacancy = await axios(url);
    setVacancy(vacancy.data);
  };
  useEffect(() => {
    fetchAsycn();
  }, []);
  const getNormalTask = (task) => {
    if (task) return task.split(/- /).map((el, i) => <div key={i}>{el}</div>);
  };
  return (
    <div className={styles.singleVacancy}>
      <div className={styles.role}>{vacancy.role}</div>
      <div className={styles.salary}>
        {vacancy.min_salary} - {vacancy.max_salary}
      </div>
      <div className={styles.location}>
        <FontAwesomeIcon className={styles.smile} icon={faLocationDot} />
        &nbsp;
        {vacancy.location}
      </div>
      <div className={styles.tags}></div>
      <div className={styles.desc}>{vacancy.desc}</div>
      <div className={styles.tasks}>
        <p>От вас требуется:</p>
        {getNormalTask(vacancy.tasks)}
      </div>
    </div>
  );
};
export { Vacancy };

// 1) Добавить вывод тегов styles.tags (удалённая работа,полный день возможность релокации). Как в карточке вакансии.
