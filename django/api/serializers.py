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
        fields = '__all__'
        depth = 1

    # более гибкая настройка репрезентации полей, можно поставить любое значение
    def to_representation(self, instance):
        rep = super(VacancySerializer, self).to_representation(instance)
        # здесь можно прописать красивые атрибуты через rep['имя поля'] = "красивый атрибут"
        return rep
