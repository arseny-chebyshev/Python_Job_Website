import "./select.css";
const Select = ({ title, option_arr }) => {
  return (
    <>
      <div>{title}</div>
      <select name="" id="">
        {option_arr.map((el) => (
          <option>{el}</option>
        ))}
      </select>
    </>
  );
};
export { Select };
