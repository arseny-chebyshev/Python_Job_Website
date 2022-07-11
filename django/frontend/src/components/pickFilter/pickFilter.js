import styles from "./pickFilter.module.css";
import { useFilters } from "../../core/hooks/useFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { delFilters } from "../../core/redux-toolkit/slices/filterSlice";
import { clearFilters } from "../../core/redux-toolkit/slices/filterSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {pickFiltersHelpers} from "../../core/helpers/pickFiltersHelpers";
const PickFilter = () => {
  const { pick } = useFilters();
  const dispatch = useDispatch();
  return (
    <div
      className={
        Object.keys(pick).length !== 0 ? styles.root : styles.root_none
      }
    >
      <div className={styles.filters}>
        <div className={styles.title}> Выбранные фильтры:</div>
        {Object.keys(pick).map((el) => (
          <div key={el} className={styles.pick}>
            {pickFiltersHelpers(pick[el])}
            <button
              onClick={() => {
                dispatch(delFilters(el));
              }}
              className={styles.delete}
            >
              <FontAwesomeIcon icon={faXmark} className={styles.del} />
            </button>
          </div>
        ))}
      </div>
      <div className={styles.sbros}>
        <span
          onClick={() => {
            dispatch(clearFilters());
          }}
          className={styles.sbros_title}
        >
          Сбросить
        </span>
      </div>
    </div>
  );
};
export { PickFilter };
