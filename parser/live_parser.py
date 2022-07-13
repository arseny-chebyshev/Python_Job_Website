import os
import requests
from dotenv import load_dotenv
from telethon.sync import events
from telethon_parser import client, parse_vacancy, channels_for_parse
load_dotenv()

@client.on(events.NewMessage(chats=channels_for_parse))
def post_new_vacancy(msg):
    vac = parse_vacancy(msg)
    if vac:
        post = requests.post(f"http://django:{os.getenv('DJANGO_PORT')}/api/vacancy/", 
                             json=vac)
        print(f"Posted vacancy: {vac}\n"
              f"Response code: {post.status_code}\n------------------")
with client:
    client.run_until_disconnected()
