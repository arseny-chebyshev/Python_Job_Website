from django.db import models
from django.core.validators import RegexValidator
from djmoney.models.fields import MoneyField
from .utils import slugify_cyrillic


class Technology(models.Model):
    name = models.CharField(verbose_name='Название технологии',
                            max_length=150, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Технология'
        verbose_name_plural = 'Технологии'


class RoleGroup(models.Model):
    name = models.CharField(verbose_name='Имя группы',
                            max_length=50, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Группа специализации'
        verbose_name_plural = 'Группы специализации'


class Role(models.Model):
    name = models.CharField(verbose_name='Название специализации',
                            max_length=50, unique=True)
    group = models.ForeignKey(RoleGroup, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Специализация'
        verbose_name_plural = 'Специализации'


class Location(models.Model):
    name = models.CharField(verbose_name='Название локации',
                            max_length=50, unique=True,
                            validators=
                               [RegexValidator('^[А-ЯA-Z]',
                                               "Название локации должно начинаться с заглавной буквы")])

    @classmethod
    def get_default_loc_id(cls):
        default_obj = Location.objects.filter(name="Не указана").first()
        if not default_obj:
            default_obj = Location(name="Не указана")
            default_obj.save()
        return default_obj.id

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Локация'
        verbose_name_plural = 'Локации'


class Channel(models.Model):
    url = models.CharField(max_length=50,
                           verbose_name="Адрес Telegram-канала",
                           unique=True) 

    def __str__(self):
        return self.url

    class Meta:
        verbose_name = 'Канал'
        verbose_name_plural = 'Каналы'


class Vacancy(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE, verbose_name="Специализация")
    desc = models.TextField(verbose_name='Описание вакансии')
    add_date = models.DateTimeField(verbose_name='Дата добавления вакансии',
                                    auto_now=True)
    min_salary = MoneyField(verbose_name='Минимальная заработная плата', default=0,
                            max_digits=12, decimal_places=2, default_currency='RUB',
                            blank=True)
    max_salary = MoneyField(verbose_name='Максимальная заработная плата', default=0,
                            max_digits=12, decimal_places=2, default_currency='RUB',
                            blank=True)
    remote = models.BooleanField(verbose_name='Удаленная работа', 
                                 default=False)
    relocation = models.BooleanField(verbose_name='Релокация',
                                     default=False)
    technologies = models.ManyToManyField(to='Technology',
                                          related_name='technologies_required',
                                          verbose_name='Технологии')
    location = models.ForeignKey(to='Location',
                                 related_name='from_location',
                                 on_delete=models.CASCADE,
                                 default=Location.get_default_loc_id,
                                 verbose_name='Локация',
                                 blank=True)
    employment = models.CharField(choices=[
                                ('FULLDAY', 'Полный день'),
                                ('NOTFULL', 'Неполный день'),
                                ('PRJ', 'Проектная занятость'),
                                ('PRTTIME', 'Частичная занятость'),
                                ('NONE', 'Не указана'),
                                ],
                                verbose_name='Занятость',
                                max_length=7, default='NONE')
    skill = models.CharField(choices=[
                            ('IN', 'Intern'),
                            ('JR', 'Junior'),
                            ('MD', 'Middle'),
                            ('SR', 'Senior'),
                            ('TL', 'TeamLead'),
                            ('NONE', 'Не указан')
                            ],
                            verbose_name='Уровень квалификации',
                            max_length=4,
                            default='NONE')
    tasks = models.TextField(verbose_name='Задачи', blank=True, default="Не указано")
    requirements = models.TextField(verbose_name='Требования', blank=True, default="Не указано")
    url = models.SlugField(verbose_name='Адрес для вакансии на сайте', max_length=255,
                           unique=True, blank=True)
    channel_id = models.ForeignKey(Channel, on_delete=models.CASCADE,
                                            verbose_name="Telegram-канал, откуда пришла вакансия")
    message_id = models.PositiveIntegerField(verbose_name='ID cообщения в telegram-канале')

    def _create_unique_vacancy_slug(self):
        if self.max_salary.amount > 0:
            slug = slugify_cyrillic(f"{self.role.name}-{self.location.name}"
                                    f"-{int(self.max_salary.amount)}-{self.max_salary.currency}")
        else:
            slug = slugify_cyrillic(f"{self.role.name}-{self.location.name}-{self.get_skill_display()}")

        unique_slug = slug
        num = 1
        while Vacancy.objects.filter(url=unique_slug).exclude(id=self.id).exists():
            unique_slug = f'{slug}-{num}'
            num += 1
        return unique_slug

    def save(self, *args, **kwargs):
        if not self.url:
            self.url = self._create_unique_vacancy_slug()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.desc

    # метод, возвращающий тг-ссылку в темплейт
    def get_tg_url(self):
        return f'https://t.me/{self.channel_id}/{self.message_id}'
        
    # фильтр по последней дате+арги
    class Meta:
        ordering = ['-add_date']
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'
        unique_together = ('channel_id', 'message_id')
