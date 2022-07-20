import styles from "./vacancyList.module.css";

const VacancyList = ({ title, list }) => {

  return (
    <div className={styles.tasks}>
      <p className={styles.tasks_title}>{title}:</p>
      <pre className={styles.tasks}>{list}</pre>
    </div>
  );
};
export { VacancyList };
