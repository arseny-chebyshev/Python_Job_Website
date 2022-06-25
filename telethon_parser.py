import os
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
            vacancies.append(msg.text) #msg.text.split('\n') для получения листа роли/тегов/описания и тд.
    except TypeError:
        continue
with open('vacancies.txt', 'w', encoding='utf-8') as f:
    for vacancy in vacancies:
        f.write(vacancy)
        f.write('\n')
    f.close()
