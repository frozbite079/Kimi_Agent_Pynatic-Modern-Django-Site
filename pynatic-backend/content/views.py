from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (
    SiteContent, HeroSection, Service,
    TeamMember, Testimonial, Metric
)
from .serializers import (
    SiteContentSerializer, HeroSectionSerializer,
    ServiceSerializer, TeamMemberSerializer, TestimonialSerializer,
    MetricSerializer
)


class SiteContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SiteContent.objects.all()
    serializer_class = SiteContentSerializer
    lookup_field = 'key'


class HeroSectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSection.objects.filter(is_active=True)
    serializer_class = HeroSectionSerializer

    @action(detail=False, methods=['get'])
    def active(self, request):
        hero = self.get_queryset().first()
        if hero:
            serializer = self.get_serializer(hero)
            return Response(serializer.data)
        return Response({'detail': 'No active hero section found'}, status=status.HTTP_404_NOT_FOUND)


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.filter(is_active=True)
    serializer_class = TeamMemberSerializer


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer


class MetricViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Metric.objects.filter(is_active=True)
    serializer_class = MetricSerializer