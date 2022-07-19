import os
from dotenv import load_dotenv
from telethon.sync import TelegramClient, events
import parser_utils
load_dotenv()

channels_for_parse = [ch.replace('\n', '') for ch in open('channels.txt', 'r', encoding='utf-8')]
client = TelegramClient('parse_session', os.getenv('TELEGRAM_API_ID'), os.getenv('TELEGRAM_API_HASH'))

def parse_vacancy(msg):
    technologies_list = [tech.replace('\n', '') for tech in 
                    open('technologies.txt', 'r', encoding='utf-8') if len(tech)> 3]
    try:
        if ('#вакансия' in msg.text) and (not any([(tag in msg.text) for tag in 
                                                 ('#статья', '#задача', '#задачаотподписчика')])):
            text = msg.text.replace('*', '') # Markdown -> Plain Text                                
            vac_arr = text.split('\n')
            if len(vac_arr) > 8:
                vac_dct = {"channel_id": {"url": msg.chat.username}, 
                           "message_id": msg.id}
                vac_dct['add_date'] = str(msg.date) 
                vac_dct['role'] = {"name": parser_utils.get_role(vac_arr[0])}
                vac_dct['technologies'] = [{"name": t} for t in 
                                           {tech for tech in technologies_list if tech in ''.join(vac_arr)}]
                vac_dct['remote'] = any(tag in ''.join(vac_arr) for tag in ['#гибрид', '#удаленка'])
                vac_dct['relocation'] = any(tag in ''.join(vac_arr) for tag in ['#релокация', '#relocation'])
                vac_dct.update(parser_utils.get_skill(''.join(vac_arr[0:3])))
                vac_dct.update(parser_utils.get_salary(''.join(vac_arr[0:3])))
                vac_dct.update(parser_utils.get_employment(''.join(vac_arr)))
                vac_dct.update(parser_utils.get_location('\n'.join(vac_arr)))
                vac_dct.update(parser_utils.get_desc_tasks_requirements(vac_arr))
                return vac_dct
    except TypeError:
        return None


def parse_all_vacancies(tg_client, channel):
    vacancies = []
    with tg_client:
        for msg in tg_client.iter_messages(channel, reverse=True):
            vacancy = parse_vacancy(msg)
            if vacancy:
                vacancies.append(vacancy)
    return vacancies
