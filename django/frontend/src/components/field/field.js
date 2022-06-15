import styles from "./field.module.css";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { Skeleton } from "../skeleton/skeleton";
import { useEffect, useState } from "react";

const Field = () => {
  const [vacancy, setVacancy] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const API_URL = "http://localhost:8000";
  const url = `${API_URL}/api/vacancy/`;
  const fetchAsycn = async () => {
    const el = await fetch(url);
    const resp = await el.json();
    setVacancy(resp);
    setisLoading(false);
  };
  useEffect(() => {
    fetchAsycn();
  }, []);
 
  console.log(vacancy);
  
  return (
    <div className={styles.field}>
      <div className={styles.field2}>
        {isLoading
          ? [1, 1, 1].map((_, i) => <Skeleton key={i} />)
          : vacancy.map((el, i) => (
              <Card
                i={i}
                key={i}
                role={el.role}
                min_salary={el.min_salary}
                max_salary={el.max_salary}
                location={el.location}
                level={el.skill}
                technologies={el.technologies}
              />
            ))}
      </div>
      <FieldFilter />
    </div>
  );
};

export { Field };
