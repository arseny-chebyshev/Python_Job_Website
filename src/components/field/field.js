import "./field.css";
import { FieldFilter } from "../field-filter/field-filter";
const Field = ({children}) => {
  return <div className="field">
    <div className="field__children">{children}</div>
    <div className="field-filter"><FieldFilter/></div>
    </div>;
};
export { Field };
