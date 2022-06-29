import re

def find_description_indice(location_index, text_arr):
    end_index = -1
    if 'Задачи:' in text_arr:
        end_index = text_arr.index('Задачи:')
    elif 'Требования:' in text_arr:
        end_index = text_arr.index('Требования:')
    return text_arr[location_index + 1: end_index]

def find_tasks_indice(desc_index, text_arr):
    end_index = -1
    if 'Задачи' in
    if '' in text_arr:
        end_index