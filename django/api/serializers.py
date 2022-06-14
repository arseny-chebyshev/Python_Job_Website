from rest_framework import serializers
from vacancies.models import Vacancy, Technology, Channel


class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = ['id', 'url']


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name']


class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = Vacancy
        # fields = '__all__'
        exclude = ('min_salary_currency', 'max_salary_currency')
        depth = 1

    # более гибкая настройка репрезентации полей, можно поставить любое значение
    def to_representation(self, instance):
        rep = super(VacancySerializer, self).to_representation(instance)
        # здесь можно прописать красивые атрибуты через rep['имя поля'] = "красивый атрибут"
        # на какое-то время для интеграции с фронтом делаем поля не вложенными при представлении
        rep['min_salary'] = f"{int(instance.min_salary.amount)}, {instance.min_salary.currency}"
        rep['max_salary'] = f"{int(instance.max_salary.amount)}, {instance.max_salary.currency}"
        rep['role'] = instance.role.name
        rep['location'] = instance.location.name
        rep['channel_id'] = instance.channel_id.url
        rep['technologies'] = [tech.name for tech in instance.technologies.all()]
        return rep
