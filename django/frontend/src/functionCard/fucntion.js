export const getNormalDate = (date) => {
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  return `Дата добавления: ${day}.${month}`;
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
