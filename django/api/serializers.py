from rest_framework import serializers
from vacancies.models import Vacancy, Technology, Channel, Location, Role


class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = ['id', 'url']

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name']

class VacancySerializer(serializers.ModelSerializer):
    # для репрезентации текстом вместо id полей CharField с TextChoices
    employment = serializers.CharField()
    skill = serializers.CharField()
    channel_id = serializers.CharField()
    location_id = serializers.CharField()
    role_id = serializers.CharField()
    technologies = TechnologySerializer(many=True)

    class Meta:
        model = Vacancy
        fields = '__all__'
        depth = 1
    # метод для создания объектов Vacancy по Post-запросу с добавлением новых Technology, пока не работает
    def create(self, validated_data):
        
        # определяем объекты для дальнейшей сериализации
        validated_data['channel_id'] = Channel.objects.get(url=validated_data['channel_id'])
        location_list = validated_data['location_id'].split(', ')
        location_obj = Location.objects.filter(country=location_list[0], city=location_list[1])
        if not location_obj.exists():
            location_obj = Location(country=location_list[0], city=location_list[1])
            location_obj.save()
            validated_data['location_id'] = location_obj.id
        else:
            validated_data['location_id'] = location_obj[0].id

        validated_data['role_id'] = Role.objects.get(name=validated_data['role_id']).id

        technologies1 = validated_data.pop('technologies', []).split(', ')

        vacancy = Vacancy.objects.create(**validated_data)
        vacancy.save()
        for technology in technologies1:
            tech_obj = Technology.objects.filter(name=technology)
            if not tech_obj.exists():
                tech_obj = Technology(name=technology)
                tech_obj.save()
                vacancy.technologies.add(tech_obj)
            else:
                vacancy.technologies.add(tech_obj[0])

        return vacancy

    # более гибкая настройка репрезентации полей, можно поставить любое значение
    def to_representation(self, instance):
        rep = super(VacancySerializer, self).to_representation(instance)
        rep['location'] = f"{instance.location.country}, {instance.location.city}"
        rep['role'] = instance.role.name
        rep['channel_id'] = instance.channel_id.url
        return rep