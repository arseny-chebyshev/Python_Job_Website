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

const ModalFilters = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.modal_filters);
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
          <VacancyNumber/>
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
            <div className={styles.select}>
              <Select
                keys="location"
                defolt={"Любое"}
                title={"Местоположение"}
                option_arr={location}
                onSelect={(value) => dispatch(setMode(value))}
              />
            </div>
            <div className={styles.input}>
              <Input
                title={"Зарплата"}
                goSalary={(salary) => dispatch(setSalary(salary))}
              />
            </div>
            <div className={styles.checkbox}>
              <Checkbox
                clickCheck={(value) => dispatch(setRelocation(value))}
                title={"Без опыта работы"}
              />
            </div>

            <div className={styles.checkbox}>
              <Checkbox
                clickCheck={(value) => dispatch(setRelocation(value))}
                title={"Указана зарплата"}
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
        </div>
        <div
          onClick={() => dispatch(close_modal_filters())}
          className={styles.close}
        >
          ×
        </div>
      </div>
    </>
  );
};
export { ModalFilters };
