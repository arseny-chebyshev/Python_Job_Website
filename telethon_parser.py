import os
import re
from dotenv import load_dotenv
from telethon.sync import TelegramClient
load_dotenv()

client = TelegramClient('parse_session', os.getenv('TELEGRAM_API_ID'), os.getenv('TELEGRAM_API_HASH'))
py_channel = 'https://t.me/job_python'
client.start()
vacancies = []
for msg in client.iter_messages(py_channel):
    try:
        if '#вакансия' in msg.text:
            vac_arr = msg.text.split('\n')
            vac_dct = {}
            vac_dct['role'] = re.search('(.+)\(.+', vac_arr[0])
            vac_dct['skill'] = re.search('Стажёр|Intern|Джуниор|Junior|Мид?дл|Middle|Сень[ое]р|Senior|TeamLead|Lead|Тимлид', 
                                          vac_arr[0], re.IGNORECASE)
            vac_dct['remote'] = any(tag in vac_arr[1] for tag in ['#гибрид', '#удаленка'])
            salary_range = re.findall('\d+?\s\d+', vac_arr[2])
            """if salary_range:
                if len(salary_range) > 1:
                    vac_dct['min_salary'], vac_dct['max_salary'] = salary_range[0], salary_range[1]
                else:
                    vac_dct['min_salary'], vac_dct['max_salary'] = salary_range[0], salary_range[0]
                vac_dct['max_salary_currency'], vac_dct['mix_salary_currency'] = re.search('[$€]|USD|EUR', vac_arr[2])"""
            
            vacancies.append([vac_dct, vac_arr]) #msg.text.split('\n') для получения листа роли/тегов/описания и тд.
    except TypeError:
        continue

"""with open('vacancies.txt', 'w', encoding='utf-8') as f:
    for vacancy in vacancies:
        f.write(vacancy)
        f.write('\n')
    f.close()"""
