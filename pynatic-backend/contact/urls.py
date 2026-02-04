from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactMessageViewSet, NewsletterSubscriberViewSet

router = DefaultRouter()
router.register(r'messages', ContactMessageViewSet, basename='contact-message')
router.register(r'subscribe', NewsletterSubscriberViewSet, basename='newsletter-subscriber')

urlpatterns = [
    path('', include(router.urls)),
]