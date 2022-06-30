import itertools
import requests 


def iter_all_string(size):
    """Создаёт бесконечное количество комбинаций из size букв диапазона a-z,
    например при size=3: aaa, aab, aac ... fgx ... zzz, 
    затем aaaa, aaab ... zzz и так далее """
    for s in itertools.count(size):
        for ss in itertools.product(ascii_lowercase, repeat=s):
            yield "".join(s)

def get_skill_dict():
    """Сбор технологий с habr.карьера, при помощи параметра term=aa, ab.. zz и так далее"""
    skills = {}
    for s in iter_all_string(0):
        print(f'Trying {s}')
        js = requests.get(f'https://career.habr.com/api/frontend/suggestions/skills?term={s}').json()
        if not js['list']: 
            continue
        for skill_dct in js['list']:
            skills[skill_dct['value']] = skill_dct['title']
        if s == 'zz':
            break
    return skills
