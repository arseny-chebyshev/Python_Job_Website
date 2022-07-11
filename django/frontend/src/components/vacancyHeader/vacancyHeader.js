// Используется на странице просмотра вакансии

import {
    getNormalDate, getNormalEmployment,
    getNormalSalary,
    getNormalSkill,
} from "../../core/helpers/cardHelpers";
import { comma } from "../../core/helpers/cardHelpers";
import { Comma } from "../comma/comma";
import styles from "./vacancyHeader.module.css";

const VacancyHeader = ({
  role,
  skill,
  add_date = "",
  min_salary,
  max_salary,
  salary_currency,
  technologies = [],
  location,
  employment,
  remote,
  relocation,
}) => {


  return (
    <div className={styles.root}>
      <div className={styles.root_header}>
        <div className={styles.role}>{role}</div>
        <div className={styles.data}>{getNormalDate(add_date)}</div>
      </div>
      <div className={styles.salary}>
        <div className={styles.title}>Зарплата</div>
        <div className={styles.body}>
          {getNormalSalary(min_salary, max_salary, salary_currency)}
        </div>
      </div>
      <div className={styles.technologies}>
        <div className={styles.title}>Стек технологий</div>
        <div className={styles.body}>
          {getNormalSkill(skill,role)} {comma(technologies)}
        </div>
      </div>
      <div className={styles.add}>
        <div className={styles.title}>Тип занятости и местоположение</div>
        <div className={styles.body_employment}>
          {location} {getNormalEmployment(employment)}
          {remote && <Comma text={"Можно удалённо"} />}
          {relocation && <Comma text={"Возможна релокация"} />}
        </div>
      </div>
    </div>
  );
};
export { VacancyHeader };
