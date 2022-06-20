from typing import List, Dict
from django.db.models import Model
from rest_framework.exceptions import ValidationError


def get_object_or_raise_400(cls: Model, **kwargs):
    obj = cls.objects.filter(**kwargs).first()
    if not obj:
        available = [dct for dct in cls.objects.all().values()]
        json_msg = {"error": f"В таблице {cls.__name__} нет данных со следующими параметрами: {kwargs}.",
                    "available": available}
        raise ValidationError(detail=json_msg)
    return obj


def get_object_or_create_new(cls: Model, **kwargs):
    obj = cls.objects.filter(**kwargs).first()
    if not obj:
        obj = cls(**kwargs)
        obj.save()
    return obj


def get_m2m_objects_or_create_new(cls: Model, obj_list: List[Dict]):
    new_list = []
    for dct in obj_list:
        obj = cls.objects.filter(**dct).first()
        if not obj:
            obj = cls(**dct)
            obj.save()
        new_list.append(obj)
    return 