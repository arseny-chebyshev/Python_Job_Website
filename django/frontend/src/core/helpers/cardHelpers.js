export const getNormalDate = (date) => {
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  return `Дата добавления: ${day}.${month}`;
};
export const getTechnologies = (tags) => {
  if (tags)
    return tags.map((el, i) =>
      i == tags.length - 1 ? (
        <span key={i}>{el}</span>
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
    case "JR":
      typeSkill = "(Junior)";
      break;
    case "MD":
      typeSkill = "(Middle)";
      break;
    case "SR":
      typeSkill = "(Senior)";
      break;
    case "TL":
      typeSkill = "(Team Lead)";
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
    salary = `${min} ${currency} - ${max} ${currency} `;
  } else if (!max && min) {
    salary = ` от ${min}  ${currency}`;
  } else if (max && !min) {
    salary = `до ${max}  ${currency}`;
  } else {
    salary = "По результатам собеседования";
  }
  return salary;
};
