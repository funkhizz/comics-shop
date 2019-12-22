from rest_framework import serializers
from contact.models import Contact

# Story Serializer

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'