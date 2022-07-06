import styles from "./header.module.css";
import { Navbar } from "../navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { HeaderMobile } from "../mobile/header-mobile/header-mobile";
import { Title } from "../title/title";

const Header = () => {
  return (
    <>
      <div className={styles.header_mobile}>
        <HeaderMobile />
      </div>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Title size={45}/>
          </div>
          <Navbar />
          <FontAwesomeIcon icon={faUser} className={styles.login} />
        </div>
      </div>
    </>
  );
};
export { Header };
