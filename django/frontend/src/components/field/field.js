import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilters } from "../../core/hooks/useFilter";
import { fetchVacansies } from "../../core/redux-toolkit/slices/vacansiesSlice";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { Skeleton } from "../skeleton/skeleton";
import { TechnologyField } from "../technologyField/techonologyField";
import { NoResult } from "../noResults/noResults";

import styles from "./field.module.css";
const Field = () => {
  const dispatch = useDispatch();

  const vacancy = useSelector((state) => state.vacansies.vacansies);
  const isLoading = useSelector((state) => state.vacansies.isLoading);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const {
    sortLevel,
    sortMode,
    sortRemote,
    sortSalary,
    sortRelocation,
    sortTechnologies,
  } = useFilters();

  useEffect(() => {
    dispatch(
      fetchVacansies({
        sortLevel,
        sortMode,
        sortRemote,
        sortSalary,
        currentPage,
        sortTechnologies,
        sortRelocation,
      })
    );
  }, [
    sortLevel,
    sortMode,
    sortRemote,
    sortSalary,
    currentPage,
    sortTechnologies,
    sortRelocation,
  ]);

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <FieldFilter />
        <div className={styles.main}>
          {isLoading ? (
            [...Array(10)].map((_, i) => <Skeleton key={i} />)
          ) : vacancy.length ? (
            vacancy.map((el, i) => (
              <Card
                id={el.id}
                key={i}
                role={el.role}
                min_salary={el.min_salary}
                max_salary={el.max_salary}
                currency={el.salary_currency}
                location={el.location}
                skill={el.skill}
                desc={el.desc}
                technologies={el.technologies}
                employment={el.employment}
                remote={el.remote}
                relocation={el.relocation}
                date={el.add_date}
              />
            ))
          ) : (
            <NoResult />
          )}
        </div>
      </div>
      <div className={styles.languages}>
        <TechnologyField />
      </div>
    </div>
  );
};

export { Field };
