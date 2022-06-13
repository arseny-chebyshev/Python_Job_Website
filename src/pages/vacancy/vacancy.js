import { useParams } from "react-router-dom";
const Vacancy = () => {
  const { id } = useParams();
  return <div>Вакансия {id}</div>;
};
export { Vacancy };
