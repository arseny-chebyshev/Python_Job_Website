import styles from "./comma.module.css";
const Comma = ({ text }) => {
  return (
    <span className={styles.root}>
      &nbsp;
      <span className={styles.comma}>•</span>
      &nbsp;
      <span>{text}</span>
    </span>
  );
};
export { Comma };
