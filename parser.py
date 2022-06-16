import requests
import re
from bs4 import BeautifulSoup

last_message_id = 1516
result = []

def salary_in(value):
    result = []
    val = re.findall(r'[\d]+', value)
    if len(val) == 2:
        result = ' '.join(val)
    elif len(val) == 4:
        after = ' '.join([val[0], val[1]])
        before = ' '.join([val[2], val[3]])
        result = '-'.join([after, before])
    return result

for msg in range(1520, 1526):
    vacancy = {'role': 0, 'salary': 0, 'mode': 0, 'location': 0, 'technology': 0}
    salary = 0
    location = []
    page = requests.get(f'https://t.me/job_python/{msg}').content.decode()
    soup = BeautifulSoup(page, features="html.parser")
    title = soup.find('meta', property="og:description")['content'].split('\n')
    if '#удаленка' in title[1] or '#гибрид' in title[1] or '#офис' in title[1] or '#полныйдень' in title[1]:
        vacancy['role'] = str(title[0]) # добавляем название вакансии
        if title[2][-1] == '₽':
            salary = salary_in(title[2])
        vacancy['salary'] = salary # добавляем зарплату
        if 'удаленка' in title[1]:
            vacancy['mode'] = '#удаленка' # добавляем формат
        else:
            vacancy['mode'] = '#офис'
        vacancy['location'] = title[3].replace(':','') # добавляем локацию
        vacancy['technology'] = title[-1]
        result.append(vacancy)

for value in result:
    print(value)