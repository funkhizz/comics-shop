from rest_framework import serializers
from product.models import Comic

# Story Serializer

class ComicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comic
        fields = '__all__'