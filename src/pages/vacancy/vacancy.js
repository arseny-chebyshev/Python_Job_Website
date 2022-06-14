import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Vacancy = () => {
  const [vacancy, setVacancy] = useState();
  // const fetchAsycn = async () => {
  //   const el = await fetch(
  //     "https://62a6626cb9b74f766a470205.mockapi.io/vacancy"
  //   );
  //   const resp = await el.json();
  //   setVacancy(resp[id].data);
  //   console.log(vacancy);
  // };
  // useEffect(() => {
  //   fetchAsycn();
  // }, []);
  const { id } = useParams();
  return (
    <div>
      {/* <div>
        <span>{vacancy.role}</span>
      </div>

      <div>
        <div>{vacancy.salary}₽</div>
        <div>{vacancy.level}</div>
        <div>{vacancy.mode}</div>
        <div cla>
          <span>Локация: </span>
          <span className>{vacancy.ocation}</span>
        </div>
        <div class>
          <span>Технологии: </span>
        </div>
      </div> */}
    </div>
  );
};
export { Vacancy };
