import styles from "./field-filter.module.css";
import { Select } from "../select/select";
import { Checkbox } from "../checkbox/checkbox";
import {
  setLevel,
  setMode,
  setRemote,
  setSalary,
} from "../../core/redux-toolkit/slices/filterSlice";
import { Input } from "../input/input";
import { useDispatch } from "react-redux";
const FieldFilter = ({ clickInputSalary }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <Select
        title={"Квалификация"}
        option_arr={["Junior", "Middle", "Senior", "Team Lead"]}
        defolt={"Любая"}
        onSelect={(value) => dispatch(setLevel(value))}
      />
      <Input
        title={"Зарплата"}
        goSalary={(salary) => dispatch(setSalary(salary))}
      />
      <Select
        title={"Тип занятости"}
        option_arr={["Полный день", "Неполный день","Проектная занятость", "Частичная занятость"]}
        defolt={"Любой"}
        onSelect={(value) => dispatch(setMode(value))}
      />
      <Checkbox
        clickCheck={(value) => dispatch(setRemote(value))}
        title={"Можно удалённо"}
      />
    </div>
  );
};
export { FieldFilter };
