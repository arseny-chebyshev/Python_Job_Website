from django.contrib import admin

from .models import Vacancies, Technologies, Location

class VacanciesAdmin(admin.ModelAdmin):
    list_display = ['title', 'add_date', 'salary', 'employment', 'skill', 'contact', 'url']
    search_fields = ('title', 'add_date', 'salary',)
    prepopulated_fields = {'url': ('title',)}

class TechnologiesAdmin(admin.ModelAdmin):
    list_display = ['name',]
    search_fields = ('name',)

class LocationAdmin(admin.ModelAdmin):
    list_display = ['country', 'city']
    search_fields = ('city',)

admin.site.register(Vacancies, VacanciesAdmin)
admin.site.register(Technologies, TechnologiesAdmin)
admin.site.register(Location, LocationAdmin)

admin.site.site_header = 'IT-HR'
admin.site.site_title = 'IT-HR'