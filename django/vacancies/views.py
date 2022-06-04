from django.shortcuts import render
from django.views.generic import ListView
from .models import Vacancies

class RawList(ListView):
    model = Vacancies
    context_object_name = 'rawlist'
    template_name = 'vacancies/rawlist.html'