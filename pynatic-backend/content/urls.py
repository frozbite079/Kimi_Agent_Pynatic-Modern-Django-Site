from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SiteContentViewSet, HeroSectionViewSet,
    ServiceViewSet, TeamMemberViewSet, TestimonialViewSet,
    MetricViewSet
)

router = DefaultRouter()
router.register(r'site-content', SiteContentViewSet)
router.register(r'hero', HeroSectionViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'team', TeamMemberViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'metrics', MetricViewSet)

urlpatterns = [
    path('', include(router.urls)),
]