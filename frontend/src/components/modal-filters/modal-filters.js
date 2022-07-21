import { useDispatch, useSelector } from "react-redux";
import { level, location, remote } from "../../core/constants/filter";
import {
  setLevel,
  setMode,
  setRelocation,
  setSalary,
  setRemote,
} from "../../core/redux-toolkit/slices/filterSlice";
import { VacancyNumber } from "../vacancyNumber/vacancyNumber";
import { close_modal_filters } from "../../core/redux-toolkit/slices/modalSlice";
import { Checkbox } from "../checkbox/checkbox";
import { Input } from "../input/input";
import { PickFilter } from "../pickFilter/pickFilter";
import { Select } from "../select/select";
import styles from "./modal-filters.module.css";
import CloseWindow from "../closeWindow/closeWindow";
import {declension} from "../../core/helpers/declension";

const ModalFilters = () => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.modal.modal_filters);

  const counter = useSelector((state) => state.vacansies.counter);

  return (
    <>
      <div
        onClick={() => dispatch(close_modal_filters())}
        className={show ? styles.overlay_active : styles.overlay}
      >
        <div
          className={
            styles.filter_overlay_active
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.filters_header}>
            <div>Фильтры</div>
            <div><CloseWindow/></div>
          </div>
          <div className={styles.filters}>
            <div className={styles.select}>
              <Select
                keys="qualification"
                title={"Квалификация"}
                option_arr={level}
                defolt={"Любая"}
                onSelect={(value) => dispatch(setLevel(value))}
              />
            </div>
            <div className={styles.select}>
              <Select
                keys="mode"
                title={"Тип занятости"}
                option_arr={remote}
                defolt={"Любой"}
                onSelect={(value) => dispatch(setMode(value))}
              />
            </div>
            <div className={styles.input}>
              <Input
                title={"Зарплата"}
                goSalary={(value) => dispatch(setSalary(value))}
              />
            </div>

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
          <PickFilter />

          <div onClick={() =>dispatch(close_modal_filters())} className={styles.go}>Смотреть {counter} {declension(counter)}</div>
        </div>
      </div>
    </>
  );
};
export { ModalFilters };
