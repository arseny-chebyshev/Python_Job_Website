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
    { icon: faReact, color: "#61dafb" },
    { icon: faVuejs, color: "#42b884" },
    { icon: faAngular, color: "#dd0031" },
    { icon: faPython, color: "blue" },
    { icon: faJava, color: "blue" },
    { icon: faJs, color: "yellow" },
  ];
  return (
    <div className={styles.technology}>
      {icons.map((el, i) => (
        <TechnologyItem
          color={el.color}
          back2={el.back}
          key={i}
          icon={el.icon}
        />
      ))}
    </div>
  );
};
export { TechnologyList };
