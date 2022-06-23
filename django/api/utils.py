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

def clean_nested_queryset(params: Dict, special_params: Dict, filter_mapping: Dict, target_model: Model):
    """
    Пример аргументов для модели Vacancy:
    params: {"remote": True, "employment": "FULLDAY"} - по обычным полям модели без отношений к другим моделям
    special_params: {"location": "Москва"} - вложенные поля, в GET запросе указанные не по id, а по другому полю
    filter_mapping: {"location": "location__name__iexact"} - фильтр к QuerySet, по которому будут находится 
                                                            вложенные объекты
    target_model: Vacancy - модель, к которой будет применяться QuerySet                                                        
    1. Метод создаёт queryset по обычным полям модели
    2. Метод начинает фильтровать QuerySet дальше по специальным (вложенным, кастомным) полям:
       если параметр фильтровки указан в filter_mapping, то параметр применяется.
       Пример: в filter_mapping указан фильтр {"location": "location__name__iexact"},
       то queryset дальше фильтуется вот так: queryset.filter(location__name__iexact=Москва)   
    """
    queryset = target_model.objects.filter(**params)
    for key, value in special_params.items():
        if key in filter_mapping:
            filter = {filter_mapping[key]: value}
            queryset = queryset.filter(**filter)
        if key == 'technologies':
            tech_list = value.split(', ')
            for tech in tech_list:
                related_obj = Technology.objects.get(name__iexact=tech)
                queryset = queryset.filter(technologies=related_obj)
    return queryset
