import styles from "./vacancyDescription.module.css";
import { VacancyList } from "../vacancyList/vacancyList";

const VacancyDescription = ({
  tasks,
  requirements,
  description,
}) => {
  return (
    <div className={styles.root}>
      <pre className={styles.desc}>{description}</pre>
        {tasks !== 'Не указано' && <VacancyList title={"Задачи"} list={tasks} />}
        {requirements !== 'Не указано' && <VacancyList title={"Требования"} list={requirements} />}

    </div>
  );
};
export { VacancyDescription };
