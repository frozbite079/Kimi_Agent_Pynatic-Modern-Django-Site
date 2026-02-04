from django.contrib import admin
from .models import (
    SiteContent, HeroSection, Service,
    TeamMember, Testimonial, Metric
)


@admin.register(SiteContent)
class SiteContentAdmin(admin.ModelAdmin):
    list_display = ['key', 'description', 'updated_at']
    search_fields = ['key', 'value']
    readonly_fields = ['updated_at']


@admin.register(Metric)
class MetricAdmin(admin.ModelAdmin):
    list_display = ['label', 'value', 'suffix', 'order', 'is_active']
    list_filter = ['is_active']
    list_editable = ['value', 'suffix', 'order', 'is_active']


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ['headline', 'cta_text', 'is_active']
    list_filter = ['is_active']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon', 'order', 'is_active']
    list_filter = ['is_active']
    list_editable = ['order', 'is_active']


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'order', 'is_active']
    list_filter = ['is_active']
    list_editable = ['order', 'is_active']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['author', 'role', 'company', 'is_active']
    list_filter = ['is_active']