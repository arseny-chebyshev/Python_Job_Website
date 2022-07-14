import {links} from "../../../core/constants/burger";
import styles from "./burger-menu.module.css";
import LinkMobile from "../linkMobile/linkMobile";

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
         <LinkMobile key={el.title} title={el.title} icon={el.icon} to={el.to}/>
        ))}
      </div>
    </div>
  );
};

export { BurgerMenu };

