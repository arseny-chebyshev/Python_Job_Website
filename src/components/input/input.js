import "./input.css";
const Input = ({ title }) => {
  return (
    <div className="input">
      <div className="input-title">{title}</div>
      <input className="input-input" placeholder="От" />
    </div>
  );
};
export { Input };
