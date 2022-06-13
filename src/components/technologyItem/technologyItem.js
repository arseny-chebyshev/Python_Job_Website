import styles from "./technologyItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechnologyItem = ({ icon }) => {
  return <FontAwesomeIcon className={`${styles.icons}`} icon={icon} />;
};
export { TechnologyItem };
