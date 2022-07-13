import { Field } from "../../components/field/field";
import styles from './main.module.css'
import { Pagination } from "../../components/pagination/pagination";
const Main = () => {
  return (
    <div className={styles.root}>
      {/* <VacancyNumber /> */}
      {/* <img style={{ height: "600px", width: "1500px" }} src={img} alt="" /> */}
      {/* <TechnologyField /> */}
      {/* <div className={styles.title}>Поиск работы в IT</div> */}
      <Field />
      <Pagination />
    </div>
  );
};

export { Main };

