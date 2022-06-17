import styles from "./vacancyList.module.css";
import { getNormalTasks } from "../../functionCard/fucntion";
const VacancyList = ({ title, list }) => {
  return (
    <div className={styles.tasks}>
      <p className={styles.tasks_title}>{title}:</p>
      <ul>{getNormalTasks(list)}</ul>
    </div>
  );
};
export { VacancyList };
