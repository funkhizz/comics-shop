from rest_framework import routers
from product.api.api import ComicViewSet

router = routers.DefaultRouter()
router.register('api/comics', ComicViewSet, 'comics')

urlpatterns = router.urls