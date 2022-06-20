import styles from "./field-filter.module.css";
import { Select } from "../select/select";
import { Checkbox } from "../checkbox/checkbox";
import {
  setLevel,
  setMode,
  setRemote,
} from "../../core/redux-toolkit/slices/filterSlice";
import { Input } from "../input/input";
import { useDispatch } from "react-redux";
const FieldFilter = ({ clickCheck, clickInputSalary }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <Select
        title={"Квалификация"}
        option_arr={["Junior", "Middle", "Senior", "Team Lead"]}
        defolt={"Любая"}
        onSelect={(value) => dispatch(setLevel(value))}
      />
      <Input title={"Зарплата"} goSalary={clickInputSalary} />
      <Select
        title={"Тип занятости"}
        option_arr={["FULLDAY", "PRJ", "NOTFULL"]}
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
