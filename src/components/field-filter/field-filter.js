import "./field-filter.css";
import { Select } from "../select/select";
import { Checkbox } from "../checkbox/checkbox";
import { useDispatch } from "react-redux";
import { level_filter } from "../../store/filterSlice";
const FieldFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter_field">
      <Select
        title={"Квалификация"}
        option_arr={[
          "Junior (Младший)",
          "Middle (Средний)",
          "Senior (Старший)",
        ]}
        defolt={"Любая"}
      />
      <Select
        title={"Тип занятости"}
        option_arr={["Полный день", "Частичная занятость"]}
        defolt={"Любой"}
        onChange={(event) => dispatch(level_filter(event.target.value))}
      />
      <Checkbox title={"Можно удалённо"} />
    </div>
  );
};
export { FieldFilter };
