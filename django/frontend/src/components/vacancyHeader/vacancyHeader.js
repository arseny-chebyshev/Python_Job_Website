import {
    getNormalEmployment,
    getNormalSalary,
    getNormalSkill,
    getNormalTechnologies, moreInfo,
} from "../../core/helpers/cardHelpers";
import styles from "./vacancyHeader.module.css";
import {faClock, faCreditCard, faFlag, faSquarePlus} from "@fortawesome/free-regular-svg-icons"
import SmileAndInfo from "../SmileAndInfo/SmileAndInfo";
import {Comma} from "../comma/comma";

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

    return (
        <div className={styles.root}>

            <div className={styles.role}> {getNormalSkill(skill, role)} {role}</div>


            <SmileAndInfo smile={faFlag} info={location}/>

            <SmileAndInfo smile={faCreditCard} info={getNormalSalary(min_salary, max_salary, salary_currency)}/>

            <SmileAndInfo smile={faClock} info={getNormalEmployment(employment)}/>

            {more && <SmileAndInfo smile={faSquarePlus} info={more}/>}

            <div className={styles.technologies}>
                {technologies.map(el => ` • ${el}`)}
            </div>
        </div>
    );
};
export {VacancyHeader};
