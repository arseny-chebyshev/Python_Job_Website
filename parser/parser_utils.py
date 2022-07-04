import re

def get_role(text_indice: str) -> str:
    if '(' in text_indice:
        return text_indice.split('(')[0]
    else:
        return text_indice


def get_skill(text_indice: str) -> dict:
    skill_dict = {}
    skill_regex = {"IN": 'Intern|Стаж[её]р',
                   "JR": 'Junior|Джуниор|Младший',
                   "MD": 'Middle|Мид[д]?л',
                   "SR": 'Senior|Сень[еёо]р|Старший',
                   "TL": 'TeamLead|Lead|Тимлид|Ведущий',}
    for name, regex in skill_regex.items():
        if re.findall(regex, text_indice, re.IGNORECASE):
            skill_dict.update({"skill": name})
    return skill_dict


def get_employment(text_indice: str) -> dict:
    emp_dict = {}
    emp_regex = {"FULLDAY": '#полныйдень|#fulltime|#?Полный[_ ]день',
                 "NOTFULL": '#гибкийграфик|#?Неполный[_ ]день',
                 "PRJ": '#проектнаязанятость|#?Проектная[_ ]занятость',
                 "PRTTIME": '#частичнаязанятость|#parttime|#?Частичная[_ ]занятость'}
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
    currency_regex = {"USD": "$|USD|долларов",
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


def find_description_indice(location_index, text_arr):
    end_index = -1
    if 'Задачи:' in text_arr:
        end_index = text_arr.index('Задачи:')
    elif 'Требования:' in text_arr:
        end_index = text_arr.index('Требования:')
    return text_arr[location_index + 1: end_index]


def find_tasks_indice(desc_index, text_arr):
    end_index = -1
    if 'Задачи' in desc_index:
        pass
    if '' in text_arr:
        end_index
