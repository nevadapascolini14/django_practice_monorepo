from rest_framework import serializers
from .models import Watch

class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watch  # Tells the serializer which model to use
        fields = '__all__'  # Includes all fields from the Watch model
