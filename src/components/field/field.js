import styles from "./field.module.css";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { Skeleton } from "../skeleton/skeleton";
import { useEffect, useState } from "react";

const Field = () => {
  const [vacancy, setVacancy] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchAsycn = async () => {
    const el = await fetch(
      "https://62a6626cb9b74f766a470205.mockapi.io/vacancy"
    );
    const resp = await el.json();
    setVacancy(resp[0].data);
    setisLoading(false);
  };
  useEffect(() => {
    fetchAsycn();
  }, []);

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
                salary={el.salary}
                mode={el.mode}
                location={el.location}
                technology={el.techology}
                level={el.level}
              />
            ))}
      </div>
      <FieldFilter />
    </div>
  );
};

export { Field };
