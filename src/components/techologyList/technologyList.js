import styles from "./technologyList.module.css";
import {
  faReact,
  faVuejs,
  faAngular,
  faPython,
  faJava,
  faJs,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { TechnologyItem } from "../technologyItem/technologyItem";
const TechnologyList = () => {
  const icons = [
    faReact,
    faVuejs,
    faAngular,
    faPython,
    faJava,
    faJs,
    faAndroid,
    faApple,
  ];
  return (
    <div className={styles.technology}>
      {icons.map((el) => (
        <TechnologyItem icon={el} />
      ))}
    </div>
  );
};
export { TechnologyList };
