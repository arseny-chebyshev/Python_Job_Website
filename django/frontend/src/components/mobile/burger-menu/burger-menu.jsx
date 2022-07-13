import { Link } from "react-router-dom";
import { links } from "../../../core/constants/burger";
import styles from "./burger-menu.module.css";

const BurgerMenu = ({ menu, setMenu }) => {
  return (
    <div
      className={menu ? styles.overlay : styles.overlayactive}
      onClick={() => {
        setMenu(!menu);
      }}
    >
      <div 
        className={menu ? styles.burger_overlay : styles.burger_overlayactive}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {links.map((el) => (
          <div key={el.title} className={styles.burger_linkWrap}>
            <Link className={styles.burger_link} to={el.to}>
              {el.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { BurgerMenu };

