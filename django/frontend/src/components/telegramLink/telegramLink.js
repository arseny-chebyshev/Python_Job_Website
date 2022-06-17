import styles from "./telegramLink.module.css";
const TelegramLink = () => {
  return (
    <button className={styles.button}>
      <a href="https://t.me/tackw" className={styles.link}>
        Отркыть вакансию
      </a>
    </button>
  );
};
export { TelegramLink };
