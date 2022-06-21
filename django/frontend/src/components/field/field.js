import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilters } from "../../core/hooks/useFilter";
import { fetchVacansies } from "../../core/redux-toolkit/slices/vacansiesSlice";
import { Card } from "../card/card";
import { FieldFilter } from "../field-filter/field-filter";
import { Skeleton } from "../skeleton/skeleton";
import styles from "./field.module.css";
const Field = () => {
  const dispatch = useDispatch();

  const vacancy = useSelector((state) => state.vacansies.vacansies);
  const isLoading = useSelector((state) => state.vacansies.isLoading);

  const { sortLevel, sortMode, sortRemote, sortSalary } = useFilters();

  useEffect(() => {
    dispatch(fetchVacansies({ sortLevel, sortMode, sortRemote, sortSalary }));
    window.scrollTo(0, 0);
  }, [sortLevel, sortMode, sortRemote, sortSalary]);

  return (
    <div className={styles.field}>
      <div className={styles.main}>
        {isLoading
          ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
          : vacancy.map((el, i) => (
              <Card
                id={el.id}
                key={i}
                role={el.role}
                min_salary={el.min_salary}
                max_salary={el.max_salary}
                currency={el.salary_currency}
                location={el.location}
                skill={el.skill}
                technologies={el.technologies}
                employment={el.employment}
                remote={el.remote}
                relocation={el.relocation}
                date={el.add_date}
              />
            ))}
      </div>
      <FieldFilter/>
    </div>
  );
};

export { Field };
