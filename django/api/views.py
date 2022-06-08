from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from vacancies.models import Vacancy, Technology
from .serializers import VacancySerializer, TechnologySerializer
 
class VacanciesViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer

    def get_queryset(self):
        vacancy = Vacancy.objects.all()
        return vacancy


class TechnologyViewSet(viewsets.ModelViewSet):
    serializer_class = TechnologySerializer

    def get_queryset(self):
        technology = Technology.objects.all()
        return technology