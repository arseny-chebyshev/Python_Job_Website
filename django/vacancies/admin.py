from django.contrib import admin
from .models import *


class VacanciesAdmin(admin.ModelAdmin):
    list_display = ['role', 'desc', 'add_date', 'min_salary', 'max_salary', 'employment', 'skill']
    search_fields = ('desc', 'add_date', 'salary',)


class TechnologiesAdmin(admin.ModelAdmin):
    list_display = ['name',]
    search_fields = ('name',)


class LocationAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ('name',)


class RoleGroupAdmin(admin.ModelAdmin):
    list_display = ['name',]
    search_fields = ('name',)


class RoleAdmin(admin.ModelAdmin):
    list_display = ['name', 'group']
    search_fields = ('name',)


class ChannelAdmin(admin.ModelAdmin):
    list_display = ['url',]
    search_fields = ('url',)


admin.site.register(Vacancy, VacanciesAdmin)
admin.site.register(Technology, TechnologiesAdmin)
admin.site.register(RoleGroup, RoleGroupAdmin)
admin.site.register(Role, RoleAdmin)
admin.site.register(Channel, ChannelAdmin)
admin.site.register(Location, LocationAdmin)

admin.site.site_header = 'IT-HR'
admin.site.site_title = 'IT-HR'