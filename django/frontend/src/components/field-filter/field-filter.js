import { useDispatch, useSelector } from "react-redux";
import { useCountFiters } from "../../core/hooks/useCountFilters";
import FilterIcon from "../../assets/image/filters/FadersHorizontal.svg";
import {
  setRelocation,
  setRemote,
} from "../../core/redux-toolkit/slices/filterSlice";
import { open_modal_filters } from "../../core/redux-toolkit/slices/modalSlice";
import { Checkbox } from "../checkbox/checkbox";
import { ModalFilters } from "../modal-filters/modal-filters";
import { SearchField } from "../searchField/searchField";
import { VacancyNumber } from "../vacancyNumber/vacancyNumber";
import styles from "./field-filter.module.css";
const FieldFilter = () => {
  const dispatch = useDispatch();

  const { countFilters } = useCountFiters();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.search}>
          <SearchField />
          <div
            onClick={() => dispatch(open_modal_filters())}
            className={styles.filters}
          >
            {countFilters ? (
              <div className={styles.count_wrap}>
                <div className={styles.count}>{countFilters}</div>{" "}
              </div>
            ) : (
              <div className={styles.img}>
                <img src={FilterIcon} className={styles.filter_icon} />
              </div>
            )}
            <div>Фильтры</div>
          </div>
          <ModalFilters />
          <div className={styles.checkbox}>
            <Checkbox
              keys="remote"
              clickCheck={(value) => dispatch(setRemote(value))}
              title={"Удалённая работа"}
            />
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              keys="relocation"
              clickCheck={(value) => dispatch(setRelocation(value))}
              title={"С релокацией"}
            />
          </div>
        </div>
        <VacancyNumber />
      </div>
    </>
  );
};
export { FieldFilter };
