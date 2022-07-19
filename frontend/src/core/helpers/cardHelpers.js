import {months} from "../constants/filter";
import {Comma} from "../../components/comma/comma";
import {declensionStack} from "./declension";


export const shareSalary = (salary) => {
	if (salary) return  salary.toString().length > 4 ? salary.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : salary.toString()
}

export const getNormalDate = (date) => {
	const month = date.substr(5, 2);
	const day = date.substr(8, 2);
	return `${day} ${months[month - 1]}`;
};
export const getNormalRole = (role) => {
	const reg = /Senior|Middle|Junior/gi;
	return (reg).test(role) ? role.replace(reg, '') : role;
};


export const moreInfo = (relocation,remote) => {
	if (relocation && remote) return 'Удалённая работа Возможна релокация'
	if (!remote && relocation) return 'Возможна релокация'
	if (!relocation && remote) return 'Удалённая работа'
	return false
}


export const getNormalEmployment = (employment) => {
	let typeWork;
	switch (employment) {
		case "PRJ":
			typeWork = "Проектная деятельность";
			break;
		case "PRTTIME":
			typeWork = "Частичная занятость";
			break;
		case "NOTFULL":
			typeWork = "Неполный день";
			break;
		case "FULLDAY":
			typeWork = "Полный день";
			break;
		case "NONE":
			typeWork = "Тип занятости не указан";
			break;
	}
	return typeWork;
};
export const getNormalSkill = (skill, role) => {

	switch (skill) {
		case "JR":
			return "Junior";
		case "MD":
			return "Middle";
			break;
		case "SR":
			return "Senior";
			break;
		case "TL":
			return "Team Lead";
			break;
		case "NONE":
			return null;

	}
};
export const getNormalTasks = (tasks) => {
	return (
		tasks &&
		tasks.split("\r\n").map((el, i) => <li key={i}>{el.replace("- ", "")}</li>)
	);
};

const getCurrency = (curr) => {
	const currency = {'RUB':'₽','USD':'$'}

	return currency[curr]
}

export const getNormalSalary = (min, max, currency) => {
	const salaryMin = shareSalary(min)
	const salaryMax = shareSalary(max)
	const valuta = getCurrency(currency)
	if (salaryMin !== salaryMax) {
		return `от ${salaryMin} ${valuta} до ${salaryMax} ${valuta}`;
	} else if (salaryMin && salaryMax){
		return `до ${salaryMin} ${valuta}`;
	} else if (!salaryMax && salaryMin) {
		return ` от ${salaryMin}  ${valuta}`;
	} else if (salaryMax && !salaryMin) {
		return `до ${salaryMax}  ${valuta}`;
	} else {
		return "По результатам собеседования";
	}
};

export const comma = (arr) => {
	if (arr.length > 6) return [arr.slice(0, 5).map((el, i) => <Comma key={i} text={el}/>), `${arr.length - 6} ${declensionStack(arr.length - 6)}`]
	return [arr.map((el, i) => <Comma key={i} text={el}/>), null];
};

export const getNormalTechnologies = (arr) => {
	if (arr.length > 12) return [arr.slice(0, 12).map((el, i) => <Comma key={i} text={el}/>), ` + ${arr.length -12} ${declensionStack(arr.length - 12)}`]
	return arr.map((el, i) => <Comma key={i} text={el}/>);
};

export const commaMobile = (arr) => {
	if (arr.length > 3) return [arr.slice(0, 3).map((el, i) => <Comma key={i} text={el}/>), `${arr.length - 3}`]
	return [arr.map((el, i) => <Comma key={i} text={el}/>), null];
};
