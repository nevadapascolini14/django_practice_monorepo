from django.urls import path
from rest_framework import serializers
from .models import Watch

from . import views

class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watch
        fields = '__all__'  # This includes all fields in the model


app_name = "polls"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote", views.vote, name="vote"),
    
    # Add the API endpoint here
    path("api/data/", views.get_data, name="get_data"),
    path("api/watches/", views.get_watches, name="get_watches"),
]
