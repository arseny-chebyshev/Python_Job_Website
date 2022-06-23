from typing import List, Dict, Tuple
from django.db.models import Model
from django.db.models import Q
from rest_framework.exceptions import ValidationError, ParseError
from vacancies.models import *

class NestedObjectManager:
    def get_object_or_raise_400(self, cls: Model, **kwargs):
        obj = cls.objects.filter(**kwargs).first()
        if not obj:
            available = [dct for dct in cls.objects.all().values()]
            json_msg = {"error": f"В таблице {cls.__name__} нет данных со следующими параметрами: {kwargs}.",
                        "available": available}
            raise ValidationError(detail=json_msg)
        return obj


    def get_object_or_create_new(self, cls: Model, **kwargs):
        obj = cls.objects.filter(**kwargs).first()
        if not obj:
            obj = cls(**kwargs)
            obj.save()
        return obj


    def get_m2m_objects_or_create_new(self, cls: Model, obj_list: List[Dict]):
        new_list = []
        for dct in obj_list:
            obj = cls.objects.filter(**dct).first()
            if not obj:
                obj = cls(**dct)
                obj.save()
            new_list.append(obj)
        return new_list


def validate_get_params(params: set, valid_params:set):
    if not params.issubset(valid_params):
        invalid_params = '\n'.join(params - valid_params)
        raise ParseError(detail=f"Данные параметры GET-запроса недопустимы: {invalid_params}."
                                f"Попробуйте следующие: {valid_params}")

def clean_vacancy_queryset(params: Dict, special_params: Tuple, target_model: Model):
    # чистим true/false до питоновских True/False
    params = {key: value.capitalize() if (value == 'true' or value == 'false') else value
              for key, value in params.items()}
    if not any([key in params for key in special_params]):
        queryset = target_model.objects.filter(**params)
    else:
        cleaned_params = {}
        for key, value in params.items():
            # Специально исключаем FK и Many-to-Many из этого фильтра, так как при простой
            # распаковке они не передадутся по названиям
            if key == 'technologies':
                tech_list = value.split(', ')
            elif key == 'role':
                cleaned_params[key] = Role.objects.filter(name__iexact=value).first()
            elif key == 'location':
                cleaned_params[key] = Location.objects.filter(name__iexact=value).first()
            elif key == 'channel_id':
                cleaned_params[key] = Channel.objects.filter(name__iexact=value).first()
            elif key == 'salary_above':
                cleaned_params['min_salary__gte'] = value
            else:
                cleaned_params[key] = value
        queryset = target_model.objects.filter(**cleaned_params)
        # Фильтруем по каждой вакансии отдельно
        if 'technologies' in params.keys():
            for tech in tech_list:
                tech_obj = Technology.objects.get(name__iexact=tech)
                queryset = queryset.filter(technologies=tech_obj)
    return queryset
    