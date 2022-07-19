import { useSelector } from "react-redux";
import { declension } from "../../core/helpers/declension";
import styles from "./vacancyNumber.module.css";
const VacancyNumber = () => {
  const counter = useSelector((state) => state.vacansies.counter);
  return (
    <div className={styles.info}>
      Найдено {counter} {declension(counter)}
    </div>
  );
};
export { VacancyNumber };
