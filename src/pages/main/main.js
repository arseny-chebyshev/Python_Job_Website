import { Field } from "../../components/field/field";
import styles from "./main.module.css";
const Main = () => {
  return (
    <>
      <p className={styles.title}>Найди работу прямо сейчас</p>
      <Field />
    </>
  );
};

export { Main };
