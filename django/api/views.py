from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.exceptions import ParseError
from rest_framework.response import Response
from vacancies.models import Vacancy, Technology, Role, Location, Channel
from .serializers import VacancySerializer, TechnologySerializer
from .utils import get_object_or_create_new, get_object_or_raise_400, get_m2m_objects_or_create_new


class VacanciesPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'limit'


class VacanciesViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer
    pagination_class = VacanciesPagination

    def get_queryset(self):
        params = self.request.query_params.dict()
        # если есть параметры запроса:
        if params:
            pagination_params = {'page': None, 'limit': None}
            for key in pagination_params:
                if key in params:
                    params.pop(key)

            # проверка на допустимые параметры запроса
            valid_param_keys = {f.name for f in Vacancy._meta.get_fields()}
            valid_param_keys.update(pagination_params.keys())
            param_keys = set(params)
            if not param_keys.issubset(valid_param_keys):
                invalid_params = '\n'.join(param_keys - valid_param_keys)
                raise ParseError(detail=f"Данные параметры GET-запроса недопустимы: {invalid_params}."
                                        f"Попробуйте следующие: {valid_param_keys}")

            # чистим true/false до питоновских True/False
            params = {key: value.capitalize() if (value == 'true' or value == 'false') else value
                      for key, value in params.items()}
            # смотрим, нет ли nested полей в запросе:
            if not any([key in params for key in ('role', 'location', 'channel_id', 'technologies')]):
                # если их нет - стандартно фильтруем по всем параметрам.
                queryset = Vacancy.objects.filter(**params)
            else:
                cleaned_params = {}
                for key, value in params.items():
                    # Специально исключаем FK и Many-to-Many из этого фильтра, так как при простой
                    # распаковке они не передадутся по названиям
                    if key == 'technologies':
                        tech_list = value.split(', ')
                    elif key == 'role':
                        cleaned_params[key] = Role.objects.filter(name=value).first().id
                    elif key == 'location':
                        value = value.capitalize()
                        cleaned_params[key] = Location.objects.filter(name=value).first().id
                    elif key == 'channel_id':
                        cleaned_params[key] = Channel.objects.filter(name=value).first().id
                    else:
                        cleaned_params[key] = value
                queryset = Vacancy.objects.filter(**cleaned_params)
                # Фильтруем по каждой вакансии отдельно
                if 'technologies' in params.keys():
                    for tech in tech_list:
                        tech_obj = Technology.objects.get(name=tech)
                        queryset = queryset.filter(technologies=tech_obj)

        # если нет параметров запроса:
        else:
            queryset = Vacancy.objects.all()
        return queryset

    def create(self, request, *args, **kwargs):
        data = request.data

        data['role'] = get_object_or_raise_400(Role, **data['role'])
        data['channel_id'] = get_object_or_raise_400(Channel, **data['channel_id'])
        if 'location' in data:
            data['location'] = get_object_or_create_new(Location, **data['location'])

        # распаковываем и создаём технологии при отсутствии их в БД, удаляем невалидные из data
        new_tech = get_m2m_objects_or_create_new(Technology, data.pop('technologies'))

        # создаём instance Вакансии, сохраняем в БД и добавляем ManytoMany технологии
        new_vacancy = Vacancy.objects.create(**data)
        new_vacancy.save()
        for technology in new_tech:
            new_vacancy.technologies.add(technology)
        serializer = VacancySerializer(new_vacancy)
        return Response(serializer.data)


class TechnologyViewSet(viewsets.ModelViewSet):
    serializer_class = TechnologySerializer

    def get_queryset(self):
        technology = Technology.objects.all()
        return technology