from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from vacancies.models import Vacancy, Technology
from .serializers import VacancySerializer, TechnologySerializer


# Create your views here.
class AddVacancies(APIView):
    # TODO: Прописать получение данных с парсера и их загрузку в БД
    def post(self, request, format=None):
        vacancy = VacancySerializer(data=request.data)
        if vacancy.is_valid():
            vacancy.save()
            return Response(vacancy.data, status=status.HTTP_201_CREATED)
        else:
            return Response(vacancy.errors, status=status.HTTP_400_BAD_REQUEST)


# TODO: На данный момент получение вакансий прописано как простой ListAPIView, 
#       но также надо добавить APIView для показа данных после фильтрации
#       + определить получение фильтрации
 
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


class ListFilteredVacancies(APIView):
    def get(self, request, format=None):
        pass
