import { Field } from "../../components/field/field";
import { TechnologyField } from "../../components/technologyField/techonologyField";
import { VacancyNumber } from "../../components/vacancyNumber/vacancyNumber";
const Main = () => {
  return (
    <>
      <VacancyNumber />
      <TechnologyField />
      <Field />
    </>
  );
};

export { Main };
