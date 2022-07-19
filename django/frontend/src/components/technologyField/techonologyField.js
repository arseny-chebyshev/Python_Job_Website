import Java from "../../assets/image/technology/java.png";
import JavaScript from "../../assets/image/technology/js.png";
import NodeJS from "../../assets/image/technology/nodejs.png";
import Python from "../../assets/image/technology/python.png";
import React from "../../assets/image/technology/react.png";
import Vue from "../../assets/image/technology/vue.png";
import { Icons } from "../icons/icons";
import styles from "./technologyField.module.css";
import {memo} from "react";



const TechnologyField = memo(() => {
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
});
export { TechnologyField };

