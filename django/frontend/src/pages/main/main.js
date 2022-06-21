import { Field } from "../../components/field/field";
import { TechnologyField } from "../../components/technologyField/techonologyField";
import ReactPaginate from 'react-paginate'
import { Pagination } from "../../components/pagination/pagination";
import { VacancyNumber } from "../../components/vacancyNumber/vacancyNumber";
const Main = () => {
  
  return (
    <>
      <VacancyNumber />
      <TechnologyField />
      <Field />
      <Pagination/>
    </>
  );
};

export { Main };
