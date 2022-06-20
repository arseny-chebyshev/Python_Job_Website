import { useEffect, useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VacancySkeleton } from "../../components/skeleton/vacancySkeleton";
import {
  getNormalSkill,
  getNormalEmployment,
  getTechnologies,
  getNormalDate,
  getNormalSalary,
} from "../../core/helpers/cardHelpers";
import { ButtonLink } from "../../components/buttonLink/buttonLink";
import { VacancyList } from "../../components/vacancyList/vacancyList";
import axios from "axios";
import styles from "./vacancy.module.css";
import { useParams } from "react-router-dom";
const Vacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `http://localhost:8000/api/vacancy/${id}/`;
  const fetchAsycn = async () => {
    const vacancy = await axios(url);
    setVacancy(vacancy.data);
    setIsLoading(false);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    fetchAsycn();
  }, []);

  return (
    <>
      {isLoading ? (
        <VacancySkeleton />
      ) : (
        <div className={styles.singleVacancy}>
          <div className={styles.header}>
            <div className={styles.role}>
              {vacancy.role} {getNormalSkill(vacancy.skill)}
            </div>
            <div className={styles.date}>{getNormalDate(vacancy.add_date)}</div>
          </div>
          <div className={styles.salary}>
            {getNormalSalary(
              vacancy.min_salary,
              vacancy.max_salary,
              vacancy.salary_currency
            )}
            <br />
          </div>
          <div className={styles.location}>
            <FontAwesomeIcon className={styles.smile} icon={faLocationDot} />
            &nbsp;
            {vacancy.location}
          </div>
          <div className={styles.technologies}>
            <b>Стек технологий:</b> {getTechnologies(vacancy.technologies)}
          </div>
          <div className={styles.technologies}>
            <b>Занятость:</b> {getNormalEmployment(vacancy.employment)}
            {vacancy.remote && <span> #Удаленная работа </span>}
            {vacancy.relocation && <span> #Возможность релокации </span>}
          </div>
          <div className={styles.desc}>
            <p className={styles.tasks_title}>О компании:</p>
            {vacancy.desc}
          </div>
          <VacancyList title={"Задачи"} list={vacancy.tasks} />
          <VacancyList title={"Требования"} list={vacancy.requirements} />
          <div className={styles.link}>
            <ButtonLink
              channel_id={vacancy.channel_id}
              message_id={vacancy.message_id}
            />
          </div>
        </div>
      )}
    </>
  );
};
export { Vacancy };
