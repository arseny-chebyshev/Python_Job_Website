import {faLocationDot, faWallet,faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {
    comma,
    commaMobile,
    getNormalDate, getNormalDesc,
    getNormalEmployment,
    getNormalRole,
    getNormalSalary,
    getNormalSkill,
    moreInfo
} from "../../core/helpers/cardHelpers";
import styles from "./card.module.css";

const Card = ({
                  role,
                  min_salary,
                  max_salary,
                  skill,
                  location,
                  technologies,
                  employment,
                  remote,
                  relocation,
                  id,
                  currency,
                  date,
                  desc,
                  tasks,
              }) => {

    const [arr, count] = comma(technologies)

    const [arrMobile, countMobile] = commaMobile(technologies)

    return (
        <div
            className={styles.card}
        >
            <div className={styles.header}>
                <Link className={styles.role_title} to={`/vacancy/${id}`}>
                    {getNormalRole(role)} {getNormalSkill(skill, role)}
                </Link>
                <div className={styles.date}>{getNormalDate(date)}</div>
            </div>
            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.location}>
                        <FontAwesomeIcon className={styles.smile} icon={faLocationDot}/>
                        {location}
                    </div>
                    <div className={styles.salary}>
                        <FontAwesomeIcon className={styles.smile} icon={faWallet}/>
                        {getNormalSalary(min_salary, max_salary, currency)}
                    </div>
                    <div className={styles.salary}>
                        <FontAwesomeIcon className={styles.smile} icon={faClock}/>
                        {employment}

                    </div>
                    <div className={styles.desc}>{desc.length < 200 ?getNormalDesc(tasks):getNormalDesc(desc)}</div>

                    <div className={styles.technologies_desktop}>
                        {arr}
                        &nbsp;
                        {count && ` +  ${count}`}
                    </div>

                    <div className={styles.technologies_mobile}>
                        {arrMobile}
                        &nbsp;
                        {countMobile && ` +  ${countMobile}`}
                    </div>

                </div>
            </div>
        </div>
    );
};
export {Card};

