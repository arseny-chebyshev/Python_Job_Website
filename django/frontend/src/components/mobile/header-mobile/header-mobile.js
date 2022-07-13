import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Title } from "../../title/title";
import { BurgerMenu } from "../burger-menu/burger-menu";
import styles from "./header-mobile.module.css";

const HeaderMobile = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={styles.header_mobile}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.burger_сlick}
          onClick={() => setActive(!active)}
        />
        <div className={styles.title}>
          <Title size={38} />
        </div>
      </div>
      <BurgerMenu menu={active} setMenu={setActive} />
    </>
  );
};
export { HeaderMobile };

