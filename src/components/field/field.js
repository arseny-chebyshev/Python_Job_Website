import "./field.css";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { defaultEqualityCheck } from "reselect";
const Field = () => {
  const defvacancy = useSelector((el) => el.filter.vacancy);
  const deflevel = useSelector((el) => el.filter.level);
  const [vacancy, setVacancy] = useState(defvacancy);
  const distantWork = useSelector((el) => el.filter.check);
  const filterDistant = () => {
    setVacancy(vacancy.filter((el) => el.role === "Python Developer"));

    setVacancy(defvacancy);
  };

  useEffect(() => {
    if (distantWork)
      setVacancy(vacancy.filter((el) => /удалённая/gi.test(el.mode)));
    else {
      setVacancy(defvacancy);
    }
  }, [distantWork]);
  useEffect(() => {
    if (deflevel != "Любой") {
      setVacancy(vacancy.filter((el) => el.mode.match(/Частичная занятость/)));
    } else {
      setVacancy(defvacancy);
    }
  }, [deflevel]);

  return (
    <div className="field">
      <div className="field__children">
        {vacancy.map((el, i) => (
          <Card
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
      {distantWork}
      <div className="field-filter">
        <FieldFilter />
      </div>
    </div>
  );
};
export { Field };
