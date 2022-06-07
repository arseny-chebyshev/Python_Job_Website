from rest_framework import serializers
from vacancies.models import Vacancy, Technology


class VacancySerializer(serializers.ModelSerializer):
    # для репрезентации текстом вместо id полей CharField с TextChoices
    employment = serializers.CharField(source='get_employment_display')
    skill = serializers.CharField(source='get_skill_display')

    class Meta:
        model = Vacancy
        fields = '__all__'
        depth = 1
    # метод для создания объектов Vacancy по Post-запросу с добавлением новых Technology, пока не работает
    """def create(self, validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        vacancy.save()
        for technology in validated_data.pop('technologies', []):
            tech_obj = Technology.objects.get(name=technology['name'])
            if not tech_obj:
                tech_obj = Technology(name=technology['name'])
                tech_obj.save()
            vacancy.technologies.add(tech_obj)
        return vacancy"""

    # более гибкая настройка репрезентации полей, можно поставить любое значение
    def to_representation(self, instance):
        rep = super(VacancySerializer, self).to_representation(instance)
        rep['location'] = f"{instance.location.country}, {instance.location.city}"
        rep['role'] = instance.role.name
        rep['channel_id'] = instance.channel_id.url
        return rep


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name']
