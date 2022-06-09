from rest_framework import viewsets
from rest_framework.response import Response
from vacancies.models import Vacancy, Technology, Role, Location, Channel
from .serializers import VacancySerializer, TechnologySerializer


class VacanciesViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer

    def get_queryset(self):
        vacancy = Vacancy.objects.all()
        return vacancy

    def create(self, request, *args, **kwargs):
        data = request.data

        # Ниже хендлим все поля ForeignKey/Many-to-Many, т.е. с зависимостями от других таблиц

        # роли нельзя добавить POST-ом, поэтому при отсутствии роли в БД поднимается Exception
        # С ошибкой 500. Нужен try/except с raise Role.DoesNotExists.
        role_obj = Role.objects.filter(**data['role']).first()
        data['role'] = role_obj

        # ищем локацию в БД, если её нет - создаём
        location_obj = Location.objects.filter(**data['location']).first()
        if not location_obj:
            location_obj = Location(**data['location'])
            location_obj.save()
        data['location'] = location_obj

        # канал нельзя создать POST-ом, поэтому при отсутсвии канала в БД поднимается Exception
        # С ошибкой 500. Нужен try/except с raise Channel.DoesNotExists
        channel_obj = Channel.objects.filter(**data['channel_id']).first()
        data['channel_id'] = channel_obj

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
