import styles from "./technologyField.module.css";
import vue from "../../assets/image/vue.png";
import nodejs from "../../assets/image/nodejs.png";
import python from "../../assets/image/python.png";
import react from "../../assets/image/react.png";
import phone from "../../assets/image/phone.png";
import js from "../../assets/image/js.png";
import java from "../../assets/image/java.png";
import { Icons } from "../icons/icons";
const TechnologyField = () => {
  const img = [vue, nodejs, python, react, phone, js, java];
  return (
    <div className={styles.root}>
      {img.map((el) => (
        <Icons key={el} path={el} />
      ))}
    </div>
  );
};
export { TechnologyField };
