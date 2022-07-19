import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {VacancyDescription} from "../../components/vacancyDescription/vacancyDescription";
import {VacancyHeader} from "../../components/vacancyHeader/vacancyHeader";
import {singleFetchVacancy,} from "../../core/redux-toolkit/slices/singleVacancy";
import styles from "./vacancy.module.css";
import {ButtonLink} from "../../components/buttonLink/buttonLink";

const Vacancy = () => {
  const { id } = useParams();

  const vacancy = useSelector((state) => state.singleVacancy.vacancy);


  const dispatch = useDispatch();



  useEffect(() => {

    dispatch(singleFetchVacancy({ id }));

  }, []);



  return (
    <div className={styles.root}>
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

        <div className={styles.link}>
            <ButtonLink channel_id={vacancy.channel_id} message_id={vacancy.message_id}/>
        </div>

    </div>
  );
};
export { Vacancy };
