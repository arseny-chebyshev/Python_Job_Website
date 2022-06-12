import "./field.css";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { useEffect, useState } from "react";

const Field = () => {
  const [vacancy, setVacancy] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(
    async () =>
      await fetch("https://62a6626cb9b74f766a470205.mockapi.io/vacancy")
        .then((res) => res.json())
        .then((el) => {
          setVacancy(el[0].data);
          setisLoading(false);
        }),
    []
  );
  console.log(vacancy);

  return (
    <div className="field">
      <div className="field__children">
        {isLoading ? (
          <p>1111111</p>
        ) : (
          vacancy.map((el, i) => (
            <Card
              key={i}
              role={el.role}
              salary={el.salary}
              mode={el.mode}
              location={el.location}
              technology={el.techology}
              level={el.level}
            />
          ))
        )}
      </div>

      <div className="field-filter">
        <FieldFilter />
      </div>
    </div>
  );
};

export { Field };
