import "./technologyItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const TechnologyItem = ({ icon }) => {
  const [select, setSelect] = useState(false);
  return (
    <FontAwesomeIcon
      onClick={() => setSelect(!select)}
      className={select ? "technology-icons-on" : "technology-icons"}
      icon={icon}
    />
  );
};
export { TechnologyItem };
