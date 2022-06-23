from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from vacancies.models import *
from .serializers import *
from .utils import NestedObjectManager, clean_vacancy_queryset, validate_get_params


class VacanciesPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'limit'
    def get_paginated_response(self, data):
        response = super().get_paginated_response(data)
        response.data['page_count'] = self.page.paginator.num_pages
        return response


class VacanciesViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer
    pagination_class = VacanciesPagination

    def get_queryset(self):
        params = self.request.query_params.dict()
        nested_manager = NestedObjectManager()
        # если есть параметры запроса:
        if params:
            pagination_params = ('page', 'page_count', 'limit')
            for key in pagination_params:
                if key in params:
                    params.pop(key)

            # проверка на допустимые параметры запроса
            valid_param_keys = {f.name for f in Vacancy._meta.get_fields()}
            special_param_keys = ('role', 'location', 'channel_id', 'technologies', 'salary_above')
            valid_param_keys.update(pagination_params, special_param_keys)
            validate_get_params(set(params), valid_param_keys)
            # смотрим, нет ли nested и не-модельных полей в запросе:
            queryset = clean_vacancy_queryset(params, special_param_keys, Vacancy)
        # если нет параметров запроса:
        else:
            queryset = Vacancy.objects.all()
        return queryset

    def create(self, request, *args, **kwargs):
        data = request.data
        nested_manager = NestedObjectManager()
        data['role'] = nested_manager.get_object_or_raise_400(Role, **data['role'])
        data['channel_id'] = nested_manager.get_object_or_raise_400(Channel, **data['channel_id'])
        if 'location' in data:
            data['location'] = nested_manager.get_object_or_create_new(Location, **data['location'])

        # распаковываем и создаём технологии при отсутствии их в БД, удаляем невалидные из data
        new_tech = nested_manager.get_m2m_objects_or_create_new(Technology, data.pop('technologies'))

        # создаём instance Вакансии, сохраняем в БД и добавляем ManytoMany технологии
        new_vacancy = Vacancy.objects.create(**data)
        new_vacancy.save()
        for technology in new_tech:
            new_vacancy.technologies.add(technology)
        serializer = VacancySerializer(new_vacancy)
        return Response(serializer.data)

class VacancyGlobalFieldSearch(ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        queryset = Vacancy.objects.all()
        return queryset

class TechnologyViewSet(viewsets.ModelViewSet):
    serializer_class = TechnologySerializer

    def get_queryset(self):
        queryset = Technology.objects.all()
        return queryset


class ChannelViewSet(viewsets.ModelViewSet):
    serializer_class = ChannelSerializer

    def get_queryset(self):
        queryset = Channel.objects.all()
        return queryset

class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializer

    def get_queryset(self):
        queryset = Role.objects.all()
        return queryset

class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer

    def get_queryset(self):
        queryset = Location.objects.all()
        return queryset
