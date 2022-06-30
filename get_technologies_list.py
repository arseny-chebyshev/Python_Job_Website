import itertools
import requests 


def iter_all_string(size):
    for s in itertools.count(size):
        for ss in itertools.product(ascii_lowercase, repeat=s):
            yield "".join(s)

def get_skill_dict():
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
