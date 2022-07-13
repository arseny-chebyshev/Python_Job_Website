import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.link}>Главная</div>
      <div className={styles.link}>Вакансии</div>
      <div className={styles.link}>О сервисе</div>
    </div>
  );
};
export { Navbar };
