import "./field.css";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



const Field = () => {
  const defvacancy = useSelector((el) => el.filter.vacancy);
  const [vacancy, setVacancy] = useState(defvacancy);
  const [distant, setDistant] = useState(false);
  const [mode, setMode] = useState(false);
  const [level, setLevel] = useState(false);

  

  // const all_filter = () => {
  //   if (distant && !mode && !level)
  //     setVacancy(vacancy.filter((el) => /удалённая/.test(el.mode)));
  //   else {
  //     setVacancy(defvacancy);
  //   }
  //   if (!distant && mode && !level) {
  //     if (mode.toString() !== "/Любой/") {
  //       setVacancy(defvacancy.filter((el) => mode.test(el.mode)));
  //     } else {
  //       setVacancy(defvacancy);
  //     }
  //   }
  //   if (!distant && !mode && level) {
  //     if (level.toString() !== "/Любая/") {
  //       setVacancy(defvacancy.filter((el) => level.test(el.level)));
  //     } else {
  //       console.log("1");

  //       setVacancy(defvacancy);
  //     }
  //   }
  //   if (distant && level && !mode) {
  //     setVacancy(
  //       defvacancy.filter(
  //         (el) => level.test(el.level) && /удалённая/.test(el.mode)
  //       )
  //     );
  //   }
  // };

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

      

      <div className="field-filter">
        <FieldFilter
          clickSelectLevel={(level) => setLevel(new RegExp(level))}
          clickSelectMode={(mode) => setMode(new RegExp(mode))}
          clickCheck={(check) => setDistant(new RegExp(check))}
        />
      </div>
    </div>
  );
};

export { Field };
