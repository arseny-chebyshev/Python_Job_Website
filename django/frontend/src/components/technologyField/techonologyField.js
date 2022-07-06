import Java from "../../assets/image/java.png";
import JavaScript from "../../assets/image/js.png";
import NodeJS from "../../assets/image/nodejs.png";
import Python from "../../assets/image/python.png";
import React from "../../assets/image/react.png";
import Vue from "../../assets/image/vue.png";
import { Icons } from "../icons/icons";
import styles from "./technologyField.module.css";
const TechnologyField = () => {
  const img = [
    { path: Python, name: "Python" },
    { path: JavaScript, name: "JavaScript" },
    { path: Java, name: "Java" },
    { path: NodeJS, name: "node.js" },
    { path: React, name: "React" },
    { path: Vue, name: "vue.js" },
    
  ];
  return (
    <div className={styles.root}>
      {img.map((el) => (
        <Icons key={el.path} path={el.path} name={el.name} />
      ))}
    </div>
  );
};
export { TechnologyField };

