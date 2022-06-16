import requests
from bs4 import BeautifulSoup

last_message_id = 1516 # номер последжней записи
vacancy = []

for msg in range(1513, 1517):
    vacancy = {'role': 0, 'salary': 0, 'mode': 0, 'location': 0, 'technology': 0}
    salary = 0
    location = []
    page = requests.get(f'https://t.me/job_python/{msg}').content.decode() # получаем информацию о вакансии
    # print(page)
    soup = BeautifulSoup(page, features="html.parser")
    title = soup.find('meta', property="og:description")['content'].split('\n') # требуемый текст вакансии
        if '#удаленка' in title[1] or '#гибрид' in title[1] or '#офис' in title[1] or '#полныйдень' in title[1]:
        vacancy['role'] = str(title[0]) # добавляем название вакансии
        if title[2][-1] == '₽':
            salary = title[2].isdigit()
        vacancy['salary'] = salary # добавляем зарплату
        vacancy['mode'] = title[1] # добавляем формат
        vacancy['location'] = title[3] # добавляем локацию
        result.append(vacancy)

# for value in vacancy:
#     print(value[0])