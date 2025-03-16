import datetime

from django.db import models
from django.utils import timezone


class Watch(models.Model):
    price = models.FloatField(null=True, blank=True)  # ✅ Nullable
    description = models.TextField(null=True, blank=True)  # ✅ Nullable
    image = models.ImageField(
        upload_to="watch_images", null=True, blank=True
    )  # ✅ Nullable
    name = models.TextField(null=True, blank=True)  # ✅ Nullable
    brand = models.TextField(null=True, blank=True)  # ✅ Nullable
    year = models.PositiveIntegerField(null=True, blank=True)  # ✅ Nullable

    def __str__(self):
        return f"{self.name}, {self.brand}, {self.year}"


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
