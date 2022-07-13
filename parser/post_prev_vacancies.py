import os
import requests
from dotenv import load_dotenv
from telethon_parser import client, channels_for_parse, parse_all_vacancies
load_dotenv()

vacancies = []
for channel in channels_for_parse:
    post = requests.post(f"http://django:{os.getenv('DJANGO_PORT')}/api/channel/", 
                      json={"url": channel[13:]})
    vacancies += parse_all_vacancies(client, channel)

for vacancy in vacancies:
    post = requests.post(f"http://django:{os.getenv('DJANGO_PORT')}/api/vacancy/", 
                        json=vacancy)
