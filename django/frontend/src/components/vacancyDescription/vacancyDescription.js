import styles from "./vacancyDescription.module.css";
import { VacancyList } from "../vacancyList/vacancyList";
import { ButtonLink } from "../buttonLink/buttonLink";
const VacancyDescription = ({
  tasks,
  requirements,
  description,
  channel_id,
  message_id,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>О вакансии</div>
      <p className={styles.desc}>{description}</p>
      <VacancyList title={"Задачи"} list={tasks} />
      <VacancyList title={"Требования"} list={requirements} />
      <div className={styles.linkTG}>
        <ButtonLink channel_id={channel_id} message_id={message_id} />
      </div>
    </div>
  );
};
export { VacancyDescription };
