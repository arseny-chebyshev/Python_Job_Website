import styles from "./header.module.css";
import { Navbar } from "../navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { HeaderMobile } from "../mobile/header-mobile/header-mobile";
import { Title } from "../title/title";
import Login from "../login/login";

const Header = () => {
  return (
    <>
      <div className={styles.header_mobile}>
        <HeaderMobile />
      </div>
      <div className={styles.root}>
          <div className={styles.logo}>
            <Title size={35}/>
          </div>
          {/*<Navbar />*/}
         <Login/>
      </div>
    </>
  );
};
export { Header };
