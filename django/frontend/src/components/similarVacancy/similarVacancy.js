import styles from "./similarVacancy.module.css";
const SimilarVacancy = ({
  role,
  min_salary,
  max_salary,
  salary_currency,
  location,
  salary,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.role}>{role}</div>
      <div className={styles.location}>{location}</div>
      <div className={styles.salary}>{salary}</div>
    </div>
  );
};
export { SimilarVacancy };
