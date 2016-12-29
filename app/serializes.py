from rest_framework import serializers
from app.models import Project, Task


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('pk', 'name', 'description', 'duration', 'avatar', )


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('pk', 'name', 'description', 'start', 'end', 'status', 'project', )
