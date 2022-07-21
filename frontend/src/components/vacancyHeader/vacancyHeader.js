import {getNormalDate, getNormalSalary, getNormalSkill, moreInfo,} from "../../core/helpers/cardHelpers";
import styles from "./vacancyHeader.module.css";
import { useNavigate } from "react-router-dom";
import {faLocationDot,faWallet,faCalendarDay,faPlus} from "@fortawesome/free-solid-svg-icons"
import SmileAndInfo from "../SmileAndInfo/SmileAndInfo";

const VacancyHeader = ({
                           role,
                           skill,
                           add_date = "",
                           min_salary,
                           max_salary,
                           salary_currency,
                           technologies = [],
                           location,
                           employment,
                           remote,
                           relocation,
                       }) => {


    const more = moreInfo(relocation, remote);

    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            <div onClick={() => navigate(-1)} className={styles.back}>Вернуться назад</div>
            <div className={styles.role}> {getNormalSkill(skill, role)} {role}</div>
            <div className={styles.data}>{getNormalDate(add_date)}</div>
            <SmileAndInfo smile={faLocationDot} info={location}/>

            <SmileAndInfo smile={faWallet} info={getNormalSalary(min_salary, max_salary, salary_currency)}/>

            <SmileAndInfo smile={faCalendarDay} info={employment}/>

            {more && <SmileAndInfo smile={faPlus} info={more}/>}

            <div className={styles.technologies}>
                {technologies.map(el => ` • ${el}`)}
            </div>
        </div>
    );
};
export {VacancyHeader};
