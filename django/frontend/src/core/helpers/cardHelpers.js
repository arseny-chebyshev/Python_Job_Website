import { months } from "../constants/filter";
import { Comma } from "../../components/comma/comma";
export const getNormalDate = (date) => {
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  return `${day} ${months[month - 1]}`;
};
export const getTechnologies = (tags) => {
  if (tags)
    return tags.map((el, i) =>
      i == tags.length - 1 ? (
        <span key={i}>\{el}</span>
      ) : (
        <span key={i}>{el}, </span>
      )
    );
};
export const getNormalEmployment = (employment) => {
  let typeWork;
  switch (employment) {
    case "PRJ":
      typeWork = "#Проектная деятельность";
      break;
    case "PRTTIME":
      typeWork = "#Частичная занятость";
      break;
    case "NOTFULL":
      typeWork = "#Неполный день";
      break;
    case "FULLDAY":
      typeWork = "#Полный день";
      break;
    case "NONE":
      typeWork = "";
      break;
  }
  return typeWork;
};
export const getNormalSkill = (skill) => {
  let typeSkill;
  switch (skill) {
    case "Intern":
      typeSkill = "Стажёр (Intern)";
      break;
    case "Junior":
      typeSkill = "Младший (Junior)";

    case "Middle":
      typeSkill = "Средний (Middle)";
      break;
    case "Senior":
      typeSkill = "Старший (Senior)";
      break;
    case "Team Lead":
      typeSkill = "Ведущий (Team Lead)";
      break;
    case "NONE":
      typeSkill = "";
      break;
  }
  return typeSkill;
};
export const getNormalTasks = (tasks) => {
  return (
    tasks &&
    tasks.split("\r\n").map((el, i) => <li key={i}>{el.replace("- ", "")}</li>)
  );
};
export const getNormalSalary = (min, max, currency) => {
  let salary;
  if (min && max) {
    salary = `${min} - ${max} ${currency} `;
  } else if (!max && min) {
    salary = ` от ${min}  ${currency}`;
  } else if (max && !min) {
    salary = `до ${max}  ${currency}`;
  } else {
    salary = "По результатам собеседования";
  }
  return salary;
};

export const comma = (arr) => {
  return arr.map((el, i) => <Comma key={i} text={el} />);
};
