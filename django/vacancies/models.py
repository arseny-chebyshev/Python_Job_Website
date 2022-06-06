from django.db import models


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
    country = models.CharField(verbose_name='Страна', 
                               max_length=50) #добавить валидаторы на то, чтобы страна и город были capitalized?
    city = models.CharField(verbose_name='Город',
                            max_length=50, unique=True)

    def __str__(self):
        return self.city

    class Meta:
        verbose_name = 'Локация'
        verbose_name_plural = 'Локации'
        unique_together = ('country', 'city')


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
    min_salary = models.PositiveIntegerField(verbose_name='Минимальная заработная плата', default=0)
    max_salary = models.PositiveIntegerField(verbose_name='Максимальная заработная плата', null=True)
    remote = models.BooleanField(verbose_name='Удаленная работа', 
                                 default=True)
    relocation = models.BooleanField(verbose_name='Релокация',
                                     default=True)
    technologies = models.ManyToManyField(to='Technology',
                                          related_name='technologies_required',  # параметр определяет возможность
                                                                                 # запросов по типу:
                                                                                 # technologies = Vacancy.objects.technologies_required.all(),
                                                                                 # т.е. чтобы можно было получить лист объектов Technology для вакансии
                                          verbose_name='Технологии')
    location = models.ForeignKey(to='Location',
                                 related_name='from_location',
                                 on_delete=models.CASCADE,
                                 default='',
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
                                max_length=7)
    skill = models.CharField(choices=[
                            ('IN', 'Intern'),
                            ('JR', 'Junior'),
                            ('MD', 'Middle'),
                            ('SR', 'Senior'),
                            ('TL', 'TeamLead'),
                            ],
                            verbose_name='Уровень квалификации',
                            max_length=2)
    tasks = models.TextField(verbose_name='Задачи')
    requirements = models.TextField(verbose_name='Требования')
    url = models.SlugField(verbose_name='Адрес для вакансии на сайте')
    channel_id = models.ForeignKey(Channel, on_delete=models.CASCADE,
                                            verbose_name="Telegram-канал, откуда пришла вакансия")
    message_id = models.PositiveIntegerField(verbose_name='ID cообщения в telegram-канале', null=True) # если не поставить default value/blank=True, то makemigrations не выполняется и предлагает утановить default value, даже при условии что в таблице нет записей (проверено TRUNCATE-ом). Сраная магия :\

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
