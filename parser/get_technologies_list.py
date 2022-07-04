from string import ascii_lowercase
import itertools
import requests 


def iter_all_string(size):
    """Создаёт бесконечное количество комбинаций из size букв диапазона a-z,
    например при size=3: aaa, aab, aac ... fgx ... zzz, 
    затем aaaa, aaab ... zzz и так далее """
    for s in itertools.count(size):
        for ss in itertools.product(ascii_lowercase, repeat=s):
            yield ''.join(ss)

def iter_all_string_cyrillic(size):
    """Создаёт бесконечное количество комбинаций из size букв диапазона a-z,
    например при size=3: ааа, ааб, аав, ааг ... яяя, 
    затем аааа, аааб ... яяяя и так далее """
    for s in itertools.count(size):
        for ss in itertools.product('абвгдеёжзийклмнопрстуфхцчшщъыьэюя', repeat=s):
            yield ''.join(ss)

def get_skill_dict():
    """Сбор технологий с habr.карьера, при помощи параметра term=aa, ab.. zz и так далее"""
    skills = {}
    for s in iter_all_string(0):
        print(f'Trying {s}')
        if len(s) > 2:
            break
        js = requests.get(f'https://career.habr.com/api/frontend/suggestions/skills?term={s}').json()
        if not js['list']: 
            continue
        for skill_dct in js['list']:
            skills[skill_dct['value']] = skill_dct['title']
    for s in iter_all_string_cyrillic(0):
        print(f'Trying {s}')
        if len(s) > 2:
            break
        js = requests.get(f'https://career.habr.com/api/frontend/suggestions/skills?term={s}').json()
        if not js['list']: 
            continue
        for skill_dct in js['list']:
            skills[skill_dct['value']] = skill_dct['title']
    return skills

skills = get_skill_dict()