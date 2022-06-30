import os
import re
from dotenv import load_dotenv
from telethon.sync import TelegramClient
load_dotenv()
technologies_list = [tech.replace('\n', '') for tech in 
                    open('technologies.txt', 'r', encoding='utf-8') if len(tech)> 3]
client = TelegramClient('parse_session', os.getenv('TELEGRAM_API_ID'), os.getenv('TELEGRAM_API_HASH'))
py_channel = 'https://t.me/job_python'
client.start()
vacancies = []
for msg in client.iter_messages(py_channel):
    try:
        if ('#вакансия' in msg.text) and (not any([(tag in msg.text) for tag in 
                                                 ('#статья', '#задача', '#задачаотподписчика')])):
            text = msg.text.replace('*', '')
            vac_dct = {"channel_id": {"url": msg.chat.username}, "message_id": msg.id}                                   
            vac_arr = text.split('\n')
            if len(vac_arr) > 8:
                skill_regex = 'Стажёр|Intern|Джуниор|Junior|Мид?дл|Middle|Сень[ое]р|Senior|TeamLead|Lead|Тимлид|Ведущий'
                vac_dct['skill'] = re.findall(skill_regex, vac_arr[0], re.IGNORECASE)
                vac_dct['technologies'] = {tech for tech in technologies_list if tech in ''.join(vac_arr)}
                if '(' in vac_arr[0]:
                    vac_dct['role'] = vac_arr[0].split('(')[0]
                else:
                    vac_dct['role'] = vac_arr[0]
                vac_dct['remote'] = any(tag in vac_arr[1] for tag in ['#гибрид', '#удаленка'])

                salary_range = re.findall('\d+?\s\d+', vac_arr[2])
                if salary_range:
                    if len(salary_range) > 1:
                        vac_dct['min_salary'], vac_dct['max_salary'] = salary_range[0], salary_range[1]
                    else:
                        vac_dct['min_salary'], vac_dct['max_salary'] = salary_range[0], salary_range[0]
                    vac_dct['max_salary_currency'] = re.search('[$€]|USD|EUR', vac_arr[2])
                    vac_dct['mix_salary_currency'] = re.search('[$€]|USD|EUR', vac_arr[2])

                vac_dct['location'] = re.findall('Локация: (.+)', vac_arr[3])
                
                if 'Требования:' in vac_arr:
                    if 'Задачи:' in vac_arr:
                        vac_dct['desc'] = '\n'.join([part for part in vac_arr[4:vac_arr.index('Задачи:')]])
                        vac_dct['tasks'] = '\n'.join([part for part in 
                                            vac_arr[vac_arr.index('Задачи:') + 1: vac_arr.index('Требования:')]])
                        vac_dct['requirements'] = '\n'.join([part for part in
                                            vac_arr[vac_arr.index('Требования:') + 1:]])
                    else:
                        vac_dct['desc'] = '\n'.join([part for part in vac_arr[4:vac_arr.index('Требования:')]])
                        vac_dct['requirements'] = '\n'.join([part for part in vac_arr[vac_arr.index('Требования:') + 1:]])
                else:
                    vac_dct['desc'] = '\n'.join(vac_arr[4:])
                vacancies.append([vac_dct, vac_arr])
    except TypeError:
        continue
