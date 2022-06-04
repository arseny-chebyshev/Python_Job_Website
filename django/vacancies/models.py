from django.db import models


class Technologies(models.Model):
    name = models.CharField(verbose_name='Название технологии',
                            max_length=150)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Технология'
        verbose_name_plural = 'Технологии'


class Location(models.Model):
    country = models.CharField(verbose_name='Страна', 
                               max_length=50)
    city = models.CharField(verbose_name='Город',
                            max_length=50)

    def __str__(self):
        return self.city

    class Meta:
        verbose_name = 'Локация'
        verbose_name_plural = 'Локации'


class Vacancies(models.Model):
    desc = models.TextField(verbose_name='Описание вакансии')
    add_date = models.DateTimeField(verbose_name='Дата добавления вакансии', 
                                    auto_now=True)
    salary = models.PositiveIntegerField(verbose_name='Заработная плата')
    remote = models.BooleanField(verbose_name='Удаленная работа', 
                                 default=True)
    relocation = models.BooleanField(verbose_name='Рабочая релокация', 
                                     default=True)
    technologies = models.ManyToManyField(to='Technologies', 
                                          related_name='tech',
                                          verbose_name='Технологии')
    location = models.ForeignKey(to='Location',
                                 related_name='loc',
                                 on_delete=models.CASCADE,
                                 default='',
                                 verbose_name='Локация')
    employment = models.CharField(choices=[
                                ('FULLDAY', 'Полный день'),
                                ('NOTFULL', 'Неполный день'),
                                ('PRJ', 'Проектная занятость'),
                                ('OFFULL', 'Частичная занятость'),
                                ],
                                verbose_name='Занятость',
                                max_length=7)
    skill = models.CharField(choices=[
                            ('JR', 'Junior'),
                            ('MD', 'Middle'),
                            ('SR', 'Senior'),
                            ('TL', 'TeamLead'),
                            ],
                            verbose_name='Уровень девелопмента',
                            max_length=2)
    tasks = models.TextField(verbose_name='Задачи')
    requirements = models.TextField(verbose_name='Требования')
    contact = models.URLField(verbose_name='Ссылка на работодателя')
    url = models.SlugField(verbose_name='Адрес вакансии')
    telegram = models.CharField(verbose_name='Ссылка на телеграмм', 
                                max_length=20, 
                                default='')

    def __str__(self):
        return self.title

    # метод, возвращающий тг-ссылку в темплейт
    def get_tg_url(self):
        string = 'https://t.me/' + self.telegram
        return string
        
    # фильтр по последней дате+арги
    class Meta:
        ordering = ['-add_date']
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'
