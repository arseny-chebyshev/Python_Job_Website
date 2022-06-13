import styles from "./input.module.css";
const Input = ({ title }) => {
  return (
    <div className={styles.input}>
      <div className={styles.title}>{title}</div>
      <input className={styles.input_input} placeholder="От" />
    </div>
  );
};
export { Input };
