import styles from "./title.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Title = ({ size }) => {
  return (
    <div className={styles.title}>
      <Link to="/" className={styles.title_link}>
        devseye
      </Link>

      <FontAwesomeIcon icon={faEye} className={styles.title_icon} />
    </div>
  );
};
export { Title };
