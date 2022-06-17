import styles from "./field-filter.module.css";
import { Select } from "../select/select";
import { Checkbox } from "../checkbox/checkbox";
import { TechnologyList } from "../techologyList/technologyList";
import { Input } from "../input/input";
const FieldFilter = ({ clickCheck, clickSelectMode, clickSelectLevel }) => {
  return (
    <div className={styles.filter}>
      <Select
        title={"Квалификация"}
        option_arr={["Junior", "Middle", "Senior"]}
        defolt={"Любая"}
        onSelect={clickSelectLevel}
      />
      <Input title={"Зарплата"} />
      <Select
        onSelect={clickSelectMode}
        title={"Тип занятости"}
        option_arr={["Полный день", "Частичная занятость"]}
        defolt={"Любой"}
      />
      <Checkbox clickCheck={clickCheck} title={"Можно удалённо"} />
      <TechnologyList />
    </div>
  );
};
export { FieldFilter };
