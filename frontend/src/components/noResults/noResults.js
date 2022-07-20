import styles from "./noResults.module.css";
import empty from "../../assets/image/technology/empty.png";
const NoResult = () => {
  return (
    <div className={styles.root}>
      <div>
        <img className={styles.empty} src={empty} alt="" />
        <div className={styles.title}>Поиск не дал результатов</div>
        <div className={styles.p}> Попробуйте изменить фильтры</div>
      </div>
    </div>
  );
};
export { NoResult };
