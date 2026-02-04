from rest_framework import serializers
from .models import (
    SiteContent, HeroSection, Service,
    TeamMember, Testimonial, Metric
)


class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = ['key', 'value', 'description', 'updated_at']


class HeroSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = [
            'id', 'headline', 'subheadline',
            'cta_text', 'cta_link',
            'secondary_cta_text', 'secondary_cta_link',
            'image', 'is_active'
        ]


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = [
            'id', 'title', 'description', 'icon',
            'features', 'technologies', 'image',
            'order', 'is_active'
        ]


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = [
            'id', 'name', 'role', 'bio', 'image',
            'linkedin', 'twitter', 'email',
            'order', 'is_active'
        ]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'quote', 'author', 'role', 'company', 'image', 'is_active']


class MetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metric
        fields = ['id', 'value', 'suffix', 'label', 'order', 'is_active']