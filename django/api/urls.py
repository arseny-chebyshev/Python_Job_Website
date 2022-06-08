from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("vacancy", views.VacanciesViewSet, basename="vacancy")
router.register("technology", views.TechnologyViewSet, basename="technology")

urlpatterns = [path('', include(router.urls))]