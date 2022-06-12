import "./field-filter.css";
import { Select } from "../select/select";
import { Checkbox } from "../checkbox/checkbox";
import { useDispatch } from "react-redux";
import { Input } from "../input/input";
const FieldFilter = ({ clickCheck,clickSelectMode,clickSelectLevel }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter_field">
      <Select
        title={"Квалификация"}
        option_arr={[
          "Junior",
          "Middle",
          "Senior",
        ]}
        defolt={"Любая"}
        onSelect={clickSelectLevel}
      />
      <Select
        title={"Местоположение"}
        option_arr={[
          "Москва",
          "Пермь",
          "Воронеж",
        ]}
      />
      
      <Select
        onSelect={clickSelectMode}
        title={"Тип занятости"}
        option_arr={["Полный день", "Частичная занятость"]}
        defolt={"Любой"}
       
      />
      <Checkbox clickCheck={clickCheck} title={"Можно удалённо"} />
      <Input title={'Зарплата'}/>
    </div>
  );
};
export { FieldFilter };
