import styles from "./icons.module.css";
const Icons = ({ path, counter }) => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={path} alt="1" />
      <div className={styles.text}> 25 вакансий</div>
    </div>
  );
};
export { Icons };
