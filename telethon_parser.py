import os
import re
from dotenv import load_dotenv
from telethon.sync import TelegramClient
import parser_utils
load_dotenv()

client = TelegramClient('parse_session', os.getenv('TELEGRAM_API_ID'), os.getenv('TELEGRAM_API_HASH'))


def parse_vacancies(tg_client, channel):
    vacancies = []
    technologies_list = [tech.replace('\n', '') for tech in 
                    open('technologies.txt', 'r', encoding='utf-8') if len(tech)> 3]
    with tg_client:
        for msg in tg_client.iter_messages(channel):
            try:
                if ('#вакансия' in msg.text) and (not any([(tag in msg.text) for tag in 
                                                         ('#статья', '#задача', '#задачаотподписчика')])):
                    text = msg.text.replace('*', '') # Markdown -> Plain Text                                
                    vac_arr = text.split('\n')
                    if len(vac_arr) > 8:
                        vac_dct = {"channel_id": {"url": msg.chat.username}, 
                                   "message_id": msg.id}   
                        vac_dct['role'] = {"name": parser_utils.get_role(vac_arr[0])}
                        vac_dct['technologies'] = {tech for tech in technologies_list if tech in ''.join(vac_arr)}
                        vac_dct['remote'] = any(tag in ''.join(vac_arr) for tag in ['#гибрид', '#удаленка'])
                        vac_dct['relocation'] = any(tag in ''.join(vac_arr) for tag in ['#релокация', '#relocation'])
                        vac_dct.update(parser_utils.get_skill(''.join(vac_arr[0:3])))
                        vac_dct.update(parser_utils.get_salary(''.join(vac_arr[0:3])))
                        vac_dct.update(parser_utils.get_employment(''.join(vac_arr)))
                        vac_dct.update(parser_utils.get_location('\n'.join(vac_arr)))
                        
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
    return vacancies

vacancies = parse_vacancies(client, 'https://t.me/job_python')
vacancies += parse_vacancies(client, 'https://t.me/job_react')
vacancies += parse_vacancies(client, 'https://t.me/job_javadevs')
