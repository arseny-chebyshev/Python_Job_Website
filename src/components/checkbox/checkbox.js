import { useS } from "react-redux";
import { distantWork_filter } from "../../store/filterSlice";
import { useDispatch,useSelector } from "react-redux";
import "./checkbox.css";
const Checkbox = ({ title }) => {
  const dispatch = useDispatch();
  const check = useSelector((el) => el.filter.check);

  return (
    <div className="checkbox">
      <input
        onChange={() => dispatch(distantWork_filter())}
        className="checkbox__input"
        type="checkbox"
        checked={check}
      />
      <span className="checkbox__title">{title}</span>
    </div>
  );
};
export { Checkbox };
