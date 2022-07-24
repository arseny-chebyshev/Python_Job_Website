import { declension } from "../../core/helpers/declension";
import { useFetchOneTechnology } from "../../core/hooks/icons/useFiltersTechnology";
import { usePickIcons } from "../../core/hooks/icons/usePickIcons";
import styles from "./icons.module.css";

const Icons = ({ path, name }) => {
  const { count } = useFetchOneTechnology(name);
  const { pick, goClick } = usePickIcons(name);

  return (
    <div
      className={pick ? styles.root_pick : styles.root}
      onClick={ goClick()}
    >
      <img className={styles.img} src={path} alt="1" />
      <div className={styles.text}>
        {count || '...'} {declension(count)}
      </div>
    </div>
  );
};
export { Icons };

