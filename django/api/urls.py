from django.urls import path
from . import views

urlpatterns = [
    path('vacancies/', views.ListVacancies.as_view(), name='api-list'),
    path('vacancies/search/', views.ListFilteredVacancies.as_view(), name='api-filter'),
    path('vacancies/add/', views.AddVacancies.as_view(), name='add-vacancies')
]