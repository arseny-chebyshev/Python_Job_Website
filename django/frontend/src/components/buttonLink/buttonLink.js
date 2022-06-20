import styles from "./buttonLink.module.css";
const ButtonLink = ({ channel_id, message_id }) => {
  const url = `https://t.me/${channel_id}/${message_id}/`;
  return (
    <button className={styles.button}>
      <a href={url} className={styles.link}>
        Открыть вакансию
      </a>
    </button>
  );
};
export { ButtonLink };
