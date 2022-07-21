import {Card} from "../card/card";
import {FieldFilter} from "../field-filter/field-filter";
import {Skeleton} from "../skeleton/skeleton";
import {TechnologyField} from "../technologyField/techonologyField";
import {NoResult} from "../noResults/noResults";
import styles from "./field.module.css";
import {useFetchInField} from "../../core/hooks/field/useFetchInField";

const Field = () => {

   const {vacancy,isLoading} = useFetchInField()

    console.log(vacancy)

    return <div className={styles.root}>
        <div className={styles.field}>
            <FieldFilter/>
            <div>
                {isLoading ?
                    [...Array(20)].map((_, i) => <Skeleton key={i}/>
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
                                tasks = {el.requirements}
                            />
                        ))
                    ) : (
                        <NoResult/>
                    )}
            </div>
        </div>
        <div className={styles.languages}>
            <TechnologyField/>
        </div>
    </div>;
};
``
export {Field};
