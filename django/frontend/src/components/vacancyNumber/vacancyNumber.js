import styles from "./vacancyNumber.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { vacansiesCounter } from "../../core/redux-toolkit/slices/vacansiesSlice";
import { declension } from "../../core/helpers/declension";
const VacancyNumber = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vacansiesCounter());
  }, []);
  const counter = useSelector((state) => state.vacansies.counter);
  return (
    <div className={styles.info}>
      Всего {counter} {declension(counter)}
    </div>
  );
};
export { VacancyNumber };
