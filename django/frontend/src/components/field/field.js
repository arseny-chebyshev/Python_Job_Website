import styles from "./field.module.css";
import axios from "axios";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { Skeleton } from "../skeleton/skeleton";
import { useEffect, useState } from "react";

const Field = () => {
  const [vacancy, setVacancy] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [skill, setSkill] = useState(0);
  const [mode, setMode] = useState(0);
  const [distant, setDistant] = useState(0);
  const API_URL = "http://localhost:8000";

  const sortSkill = skill && skill !== "Любая" ? `skill=${skill}` : "";
  const sortMode = mode && mode !== "Любой" ? `&employment=${mode}` : "";
  const sortDistant = distant ? `&remote=true` : "";

  const url = `${API_URL}/api/vacancy/?${sortSkill}${sortMode}${sortDistant}`;
  const fetchAsycn = async () => {
    setisLoading(true);
    const res = await axios(url);
    setVacancy(res.data);
    console.log(res.data);
    setisLoading(false);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    fetchAsycn();
  }, [skill, mode, distant]);

  return (
    <div className={styles.field}>
      <div className={styles.main}>
        {isLoading
          ? [1, 1, 1, 1, 1, 1, 1].map((_, i) => <Skeleton key={i} />)
          : vacancy.map((el, i) => (
              <Card
                id={el.id}
                key={i}
                role={el.role}
                min_salary={el.min_salary}
                max_salary={el.max_salary}
                location={el.location}
                skill={el.skill}
                technologies={el.technologies}
                employment={el.employment}
                remote={el.remote}
                relocation={el.relocation}
                date={el.add_date}
              />
            ))}
      </div>
      <FieldFilter
        clickCheck={(check) => setDistant(check)}
        clickSelectMode={(mode) => {
          setMode(mode);
        }}
        clickSelectLevel={(skill) => setSkill(skill)}
      />
    </div>
  );
};

export { Field };
