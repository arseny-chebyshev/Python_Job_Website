import {faLocationDot,faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {
	comma,
	getNormalDate,
	getNormalEmployment,
	getNormalRole,
	getNormalSalary,
	getNormalSkill
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
			  }) => {

	const [arr, count] = comma(technologies)
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
					{location === 'Не указана' ?'':<div className={styles.location}>
						<FontAwesomeIcon className={styles.smile} icon={faLocationDot}/>
						{location}
					</div>}
					<div className={styles.salary}>
						<FontAwesomeIcon className={styles.smile} icon={faWallet}/>
						{getNormalSalary(min_salary, max_salary, currency)}
					</div>
					<div className={styles.desc}>{desc}</div>

					<div className={styles.technologies}>{arr}&nbsp;
						{count && ` +  ${count}`}</div>
					<div className={styles.add}>
						{getNormalEmployment(employment)}
						{remote && " #Можно удалённо"}
						{relocation && " #Возможна релокация"}
					</div>
				</div>
			</div>
		</div>
	);
};
export {Card};

