from django.http import HttpResponseBadRequest
from rest_framework import viewsets
from rest_framework.response import Response
from vacancies.models import Vacancy, Technology, Role, Location, Channel
from .serializers import VacancySerializer, TechnologySerializer


class VacanciesViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer

    def get_queryset(self):
        params = self.request.query_params.dict()
        # если есть параметры запроса:
        if params:
            # проверка на допустимые параметры запроса, пока не работает
            valid_param_keys = {f.name for f in Vacancy._meta.get_fields()}
            param_keys = set(params)
            if not param_keys.issubset(valid_param_keys):
                invalid_params = '\n'.join(param_keys - valid_param_keys)
                return HttpResponseBadRequest(f"Данные параметры запроса недопустимы:\n{invalid_params}")
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

        # Если роли из запроса не в БД, возвращаем 400 BAD REQUEST со списком доступных
        role_obj = Role.objects.filter(**data['role']).first()
        if not role_obj:
            roles = '\n'.join([str(role_dct) for role_dct in Role.objects.all().values()])
            return HttpResponseBadRequest(f'Данной "role" нет в базе данных. Попробуйте следующие:\n'
                                          f'{roles}')
        data['role'] = role_obj

        # Если канала из запроса нет в БД, возвращаем 400 BAD REQUEST со списком доступных
        channel_obj = Channel.objects.filter(**data['channel_id']).first()
        if not channel_obj:
            channels = '\n'.join([str(ch_dct) for ch_dct in Channel.objects.all().values()])
            return HttpResponseBadRequest(f'Данного "channel_id" нет в базе данных. Попробуйте следующие:\n'
                                          f'{channels}')
        data['channel_id'] = channel_obj

        # ищем локацию в БД, если её нет - создаём
        if 'location' in data.keys():
            location_obj = Location.objects.filter(**data['location']).first()
            if not location_obj:
                location_obj = Location(**data['location'])
                location_obj.save()
            data['location'] = location_obj

        # распаковываем и создаём технологии при отсутствии их в БД
        old_tech = data.pop('technologies')
        new_tech = []
        for technology in old_tech:
            tech_obj = Technology.objects.filter(**technology).first()
            if not tech_obj:
                tech_obj = Technology(**technology)
                tech_obj.save()
            new_tech.append(tech_obj)
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
