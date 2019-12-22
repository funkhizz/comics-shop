from rest_framework import routers
from contact.api.api import ContactViewSet

router = routers.DefaultRouter()
router.register('api/contacts', ContactViewSet, 'contacts')

urlpatterns = router.urls