import styles from "./overlay.module.css";

const Overlay = ({ children }) => {
  return <div  className={styles.overlay}>{children}</div>;
};

export { Overlay };
