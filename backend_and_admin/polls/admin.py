from django.contrib import admin

from .models import Question, Choice, Watch

class ChoiceInLine(admin.TabularInline):
    model=Choice
    extra=3

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["question_text"]}),
        ("Date information", {"fields": ["pub_date"]}),
    ]
    inlines = [ChoiceInLine]
    
class WatchAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["price", "image", "name", "brand", "year"]}),
    ]

admin.site.register(Question, QuestionAdmin)
admin.site.register(Watch, WatchAdmin)