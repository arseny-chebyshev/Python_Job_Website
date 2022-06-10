import "./field-filter.css";
import { Select } from "../select/select";
import { Checkbox } from "../checkbox/checkbox";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const FieldFilter = () => {

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
      />
      <Checkbox title={"Можно удалённо"} />
    </div>
  );
};
export { FieldFilter };
