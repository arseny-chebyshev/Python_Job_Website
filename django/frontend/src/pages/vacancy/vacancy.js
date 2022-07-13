import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SimilarListVacancy } from "../../components/similarListVacancy/similarVacancy";
import { VacancyDescription } from "../../components/vacancyDescription/vacancyDescription";
import { VacancyHeader } from "../../components/vacancyHeader/vacancyHeader";
import {
  AddFetchVacancy,
  singleFetchVacancy,
} from "../../core/redux-toolkit/slices/singleVacancy";
import styles from "./vacancy.module.css";
const Vacancy = () => {
  const { id } = useParams();

  const vacancy = useSelector((state) => state.singleVacancy.vacancy);
  const technologies = useSelector((state) => state.singleVacancy.technologies);

  const dispatch = useDispatch();

  const addVacancy = useSelector((state) => state.singleVacancy.addVacancy);

  useEffect(() => {
    dispatch(singleFetchVacancy({ id }));
  }, []);

  useEffect(() => {
    if (technologies.length !== 0) dispatch(AddFetchVacancy({ technologies }));
    window.scroll(0, 0);
  }, [technologies]);

  return (
    <div className={styles.root}>
      <div>
        <VacancyHeader
          role={vacancy.role}
          skill={vacancy.skill}
          add_date={vacancy.add_date}
          min_salary={vacancy.min_salary}
          max_salary={vacancy.max_salary}
          salary_currency={vacancy.salary_currency}
          technologies={vacancy.technologies}
          location={vacancy.location}
          employment={vacancy.employment}
          remote={vacancy.remote}
          relocation={vacancy.relocation}
        />
        <VacancyDescription
          tasks={vacancy.tasks}
          requirements={vacancy.requirements}
          description={vacancy.desc}
          message_id={vacancy.message_id}
          channel_id={vacancy.channel_id}
        />
      </div>
      <SimilarListVacancy similar={addVacancy} />
    </div>
  );
};
export { Vacancy };
