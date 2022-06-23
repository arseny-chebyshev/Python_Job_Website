from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("vacancy", views.VacanciesViewSet, basename="vacancy")
router.register("technology", views.TechnologyViewSet, basename="technology")
router.register("channel", views.ChannelViewSet, basename="channel")
router.register("role", views.RoleViewSet, basename="role")
router.register("location", views.LocationViewSet, basename="location")

urlpatterns = [path('', include(router.urls)),
               path('search', views.VacancyGlobalFieldSearch.as_view(), name="search")]