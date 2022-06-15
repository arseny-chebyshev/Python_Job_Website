import styles from "./technologyItem.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechnologyItem = ({ icon, color }) => {
  const [active, setActive] = useState(false);
  return (
    <FontAwesomeIcon
      border={"none"}
      onClick={() => setActive(!active)}
      style={
        active
          ? { color: `${color}`, border: "none" }
          : { color: "gray", border: "none" }
      }
      className={`${styles.icons}`}
      icon={icon}
    />
  );
};
export { TechnologyItem };
