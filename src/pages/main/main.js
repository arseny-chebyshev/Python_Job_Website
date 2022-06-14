import { Field } from "../../components/field/field";
import { FieldFilter } from "../../components/field-filter/field-filter";
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
