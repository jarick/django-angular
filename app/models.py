from django.db import models

INCOMPLETE = 0
COMPLETE = 1
STATUS = (
    (INCOMPLETE, 'incomplete'),
    (COMPLETE, 'complete'),
)


class Project(models.Model):
    name = models.CharField('Name', max_length=255)
    date = models.DateTimeField('Date', auto_now_add=True)
    description = models.TextField('Description')
    duration = models.DurationField('Duration')
    avatar = models.ImageField('avatar')

    def __str__(self):
        return 'Project: %s' % self.name

    class Meta:
        verbose_name = 'project'
        verbose_name_plural = 'projects'


class Task(models.Model):
    name = models.CharField('Name', max_length=255)
    date = models.DateTimeField('Date', auto_now_add=True)
    description = models.TextField('Description')
    start = models.DateTimeField('Start')
    end = models.DateTimeField('End')
    status = models.PositiveSmallIntegerField('Status', choices=STATUS, default=INCOMPLETE)
    project = models.ForeignKey(Project, verbose_name='Project')

    def __str__(self):
        return 'Task: %s' % self.name

    class Meta:
        verbose_name = 'task'
        verbose_name_plural = 'tasks'
