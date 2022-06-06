from django.shortcuts import render
from django.views.generic import ListView
from .models import Vacancy


class RawList(ListView):
    model = Vacancy
    context_object_name = 'rawlist'
    template_name = 'vacancies/rawlist.html'