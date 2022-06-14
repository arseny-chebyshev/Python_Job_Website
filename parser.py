import requests
from bs4 import BeautifulSoup

last_message_id = 1516 # номер последжней записи
vacancy = []

for msg in range(1513, 1517):
    page = requests.get(f'https://t.me/job_python/{msg}').content.decode() # получаем информацию о вакансии
    # print(page)
    soup = BeautifulSoup(page, features="html.parser")
    title = soup.find('meta', property="og:description")['content'].split('\n') # требуемый текст вакансии
    vacancy.append(title)

# for value in vacancy:
#     print(value[0])