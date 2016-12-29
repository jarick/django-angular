from django.contrib import admin
from app.models import Project, Task


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('avatar', 'id', 'name', 'date', 'duration', )
    search_fields = ('name', )
    list_filter = ('date', )


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'date', 'status', 'start', 'end', )
    search_fields = ('name', 'project.name', )
    list_filter = ('status', 'date', )
