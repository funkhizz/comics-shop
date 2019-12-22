from contact.models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer

# Story Viewset
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContactSerializer