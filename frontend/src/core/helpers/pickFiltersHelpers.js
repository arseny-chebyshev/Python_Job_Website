import {shareSalary} from "./cardHelpers";

export const level = {
	'JR': "Junior",
	'MD': "Middle",
	'SR': "Senior",
	'TL': "Team Lead",
};

export const remote = {
	"FULLDAY": "Полный день",
	"NOTFULL":"Неполный день",
	"PRJ": "Проектная занятость",
	"PRTTIME": "Частичная занятость",
}


export const pickFiltersHelpers = (pick) => {
	if (/\d/.test(pick)) return `от ${shareSalary(pick)} ₽`
	switch (pick) {
		case 'JR':
		case 'MD':
		case 'SR':
		case 'TL':
			return level[pick]
		case "FULLDAY":
		case "NOTFULL":
		case "PRJ":
		case "PRTTIME":
			return remote[pick]

	}

	return pick
}
