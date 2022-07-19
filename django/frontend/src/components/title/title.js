import styles from "./title.module.scss";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className={styles.title}>
      <Link to="/" className={styles.link}>
        devseye
      </Link>
        <FontAwesomeIcon icon={faEye} className={styles.icon} />
    </div>
  );
};
export { Title };
