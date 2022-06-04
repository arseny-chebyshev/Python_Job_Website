from django.urls import path

from .views import RawList

urlpatterns = [
    path('', RawList.as_view(), name='list'),
]