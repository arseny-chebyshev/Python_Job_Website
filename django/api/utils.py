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
