# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-29 17:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='duration',
            field=models.DurationField(verbose_name='Duration'),
        ),
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.PositiveSmallIntegerField(choices=[(0, 'incomplete'), (1, 'complete')], default=0, verbose_name='Status'),
        ),
    ]
