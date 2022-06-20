import { useEffect, useState } from "react";
import styles from "./icons.module.css";
import axios from "axios";

const Icons = ({ path,name }) => {
  const [count, setCount] = useState(0);
  const url = `http://localhost:8000/api/vacancy/?technologies=${name}`;
  const fetchAsycn = async () => {
    const { data } = await axios(url);
    console.log(data.count);
    setCount(data.count);
  };
  useEffect(() => {
    fetchAsycn();
  }, []);
  return (
    <div className={styles.root}>
      <img className={styles.img} src={path} alt="1" />
      <div className={styles.text}>{count}</div>
    </div>
  );
};
export { Icons };
