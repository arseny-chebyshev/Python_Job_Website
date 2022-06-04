from rest_framework import generics
from rest_framework.views import APIView
from vacancies.models import Vacancies
from .serializers import VacanciesSerializer

# Create your views here.
class AddVacancies(APIView):
    # TODO: Прописать получение данных с парсера и их загрузку в БД
    def post(self, request, format=None):
    	pass


# TODO: На данный момент получение вакансий прописано как простой ListAPIView, 
#       но также надо добавить APIView для показа данных после фильтрации
#       + определить получение фильтрации
 
class ListVacancies(generics.ListAPIView):
    queryset = Vacancies.objects.all()
    serializer_class = VacanciesSerializer

class ListFilteredVacancies(APIView):

    def get(self, request, format=None):
    	pass