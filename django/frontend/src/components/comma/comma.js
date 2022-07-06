import styles from "./comma.module.css";
const Comma = ({ text }) => {
  return (
    <div className={styles.root}>
      &nbsp;
      <div className="comma">•</div>
      &nbsp;
      <div>{text}</div>
    </div>
  );
};
export { Comma };
