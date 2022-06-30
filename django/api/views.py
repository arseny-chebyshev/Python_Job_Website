from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.db.models import Q
from vacancies.models import *
from .serializers import *
from .utils import NestedObjectManager, clean_nested_queryset, validate_get_params


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

        # если есть параметры запроса:
        if params:
            pagination_params = ('page', 'page_count', 'limit')
            for key in pagination_params:
                if key in params:
                    params.pop(key)

            # проверка на допустимые параметры запроса
            valid_param_keys = {f.name for f in Vacancy._meta.get_fields()}
            special_param_keys = ('role', 'location', 'channel_id', 
                                  'technologies', 'salary_above')
            valid_param_keys.update(pagination_params, special_param_keys)
            validate_get_params(set(params), valid_param_keys)
            # чистим параметры GET запроса для специальных(вложенных, кастомных) полей
            params = {key: value.capitalize() if (value == 'true' or value == 'false') else value
                      for key, value in params.items()}
            special_params = {key: params.pop(key) for key in special_param_keys if key in params}
            filter_mapping = {"role": "role__name__iexact",
                              "location": "location__name__iexact",
                              "channel_id": "channel_id__url__iexact",
                              "salary_above": "min_salary__gt",}
            queryset = clean_nested_queryset(params, special_params, filter_mapping, Vacancy)
        # если нет параметров запроса:
        else:
            queryset = Vacancy.objects.all()
        return queryset

    def create(self, request, *args, **kwargs):
        data = request.data
        nested_manager = NestedObjectManager()
        data['role'] = nested_manager.get_object_or_create_new(Role, **data['role'])
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

class VacancyGlobalFieldSearch(viewsets.ReadOnlyModelViewSet):
    serializer_class = VacancySerializer
    pagination_class = VacanciesPagination

    def list(self, request, *args, **kwargs):
        import re
        search_query=request.query_params.dict().get('search', None)
        response =  super().list(request, *args, **kwargs)
        for vacancy in response.data['results']:
            found_in = []
            for key, value in vacancy.items():
                if re.search(str(search_query), str(value), re.IGNORECASE):
                    found_in.append(key)
            vacancy['found_in'] = found_in
        return response

    def get_queryset(self):
        field_filter_mapping = {"desc": "__icontains",
                                "tasks": "__icontains",
                                "requirements": "__icontains",
                                "role": "__name__icontains",
                                "location": "__name__icontains",} 
        search_query = self.request.query_params.dict().get('search', None)
        if search_query:
            query = Q(technologies__name__in=[search_query])
            for field, filter in field_filter_mapping.items():
                concat_filter = {f"{field}{filter}": search_query}
                query.add(Q(**concat_filter), Q.OR)
            queryset = Vacancy.objects.filter(query).distinct() 
        else:
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
