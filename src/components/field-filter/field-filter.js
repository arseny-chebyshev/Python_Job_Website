import "./field-filter.css";
import { Select } from "../select/select";
const FieldFilter = () => {
  return (
    <div className="filter_field">
      <Select
        title={"Квалификация"}
        option_arr={["Junior", "Middle", "Senior"]}
      />
    </div>
  );
};
export { FieldFilter };
