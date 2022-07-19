import styles from "./similarListVacancy.module.css";
import { getNormalSalary } from "../../core/helpers/cardHelpers";
import { SimilarVacancy } from "../similarVacancy/similarVacancy";
const SimilarListVacancy = ({ similar }) => {
  return (
    <div className={styles.add_vacancy}>
      <div className={styles.title}>Похожие вакансии</div>
      {similar &&
        similar.map((el) => (
          <SimilarVacancy
            key={el.url}
            role={el.role}
            location={el.location}
            salary={getNormalSalary(
              el.min_salary,
              el.max_salary,
              el.salary_currency
            )}
            min_salary={el.min_salary}
            max_salary={el.max_salary}
            salary_currency={el.salary_currency}
          />
        ))}
    </div>
  );
};
export { SimilarListVacancy };
