import styles from "./technologyItem.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechnologyItem = ({ icon, color }) => {
  const [active, setActive] = useState(false);
  return (
    <FontAwesomeIcon
      border={false}
      onClick={() => setActive(!active)}
      style={active ? { color: `${color}` } : { color: `gray` }}
      className={`${styles.icons}`}
      icon={icon}
    />
  );
};
export { TechnologyItem };
