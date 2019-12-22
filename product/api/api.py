from product.models import Comic
from rest_framework import viewsets, permissions
from .serializers import ComicSerializer

# Story Viewset
class ComicViewSet(viewsets.ModelViewSet):
    queryset = Comic.objects.all().order_by('title')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ComicSerializer