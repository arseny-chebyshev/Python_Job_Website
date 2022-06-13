import styles from "./notFound.module.css";
const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.error}>Ошибка 404</div>
      <div className={styles.title}>К сожалению, страница не найдена</div>
    </div>
  );
};
export { NotFound };
