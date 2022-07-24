import re

def get_role(text_indice: str) -> str:
    if '(' in text_indice:
        return text_indice.split('(')[0].strip()
    else:
        return text_indice.strip()


def get_skill(text_indice: str) -> dict:
    skill_dict = {}
    skill_regex = {"Intern": 'Intern|Стаж[её]р',
                   "Junior": 'Junior|Джуниор|Младший',
                   "Middle": 'Middle|Мид[д]?л',
                   "Senior": 'Senior|Сень[еёо]р|Старший',
                   "Team Lead": 'TeamLead|Lead|Тимлид|Ведущий',}
    for name, regex in skill_regex.items():
        if re.findall(regex, text_indice, re.IGNORECASE):
            skill_dict.update({"skill": name})
    return skill_dict


def get_employment(text_indice: str) -> dict:
    emp_dict = {}
    emp_regex = {"Полный день": '#полныйдень|#fulltime|#?Полный[_ ]день',
                 "Гибкий график": '#гибкийграфик|#?Неполный[_ ]день',
                 "Проектная занятость": '#проектнаязанятость|#?Проектная[_ ]занятость',
                 "Частичная занятость": '#частичнаязанятость|#parttime|#?Частичная[_ ]занятость'}
    for name, regex in emp_regex.items():
        if re.findall(regex, text_indice, re.IGNORECASE):
            emp_dict.update({"employment": name})
    return emp_dict


def get_location(text_indice: str) -> dict:
    location_dct = {}
    location = re.findall('Локация: (.+)', text_indice)
    if location:
        location_dct['location'] = {"name": location[0]}
    return location_dct


def get_salary(text_indice: str) -> dict:
    salary_dict = {}
    currency_regex = {"USD": "\$|USD|долларов",
                      "EUR": "€|EUR|евро",
                      "RUB": "₽|RUB|руб.|рублей"}
    salary_range = re.findall('\d+?\s\d+', text_indice)
    if salary_range:
        if len(salary_range) > 1:
            salary_dict.update({'min_salary': int(salary_range[0].replace(' ', '')), 
                                'max_salary': int(salary_range[1].replace(' ', ''))})
        else:
            salary_dict.update({'min_salary': int(salary_range[0].replace(' ', '')), 
                                'max_salary': int(salary_range[0].replace(' ', ''))})
        for name, currency in currency_regex.items():
            if re.findall(currency, text_indice, re.IGNORECASE):
                salary_dict.update({'min_salary_currency': name,
                                    'max_salary_currency': name})
    return salary_dict


def get_desc_tasks_requirements(vac_arr: list) -> dict:
    dct = {}
    if 'Требования:' in vac_arr:
        if 'Задачи:' in vac_arr:
            dct['desc'] = '\n'.join([part for part in vac_arr[4:vac_arr.index('Задачи:')]])
            dct['tasks'] = '\n'.join([part for part in 
                                vac_arr[vac_arr.index('Задачи:') + 1: vac_arr.index('Требования:')]])
            dct['requirements'] = '\n'.join([part for part in
                                vac_arr[vac_arr.index('Требования:') + 1:]])
        else:
            dct['desc'] = '\n'.join([part for part in vac_arr[4:vac_arr.index('Требования:')]])
            dct['requirements'] = '\n'.join([part for part in vac_arr[vac_arr.index('Требования:') + 1:]])
    else:
        dct['desc'] = '\n'.join(vac_arr[4:])
    return dct
