from django.db import models


class SiteContent(models.Model):
    key = models.CharField(max_length=100, unique=True)
    value = models.TextField()
    description = models.CharField(max_length=200, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Site Content'
        verbose_name_plural = 'Site Contents'

    def __str__(self):
        return self.key


class Metric(models.Model):
    value = models.DecimalField(max_digits=10, decimal_places=1)
    suffix = models.CharField(max_length=10, default='+', help_text="e.g., +, %, K")
    label = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name = 'Metric'
        verbose_name_plural = 'Metrics'

    def __str__(self):
        return f"{self.value}{self.suffix} {self.label}"


class HeroSection(models.Model):
    headline = models.CharField(max_length=200)
    subheadline = models.TextField()
    cta_text = models.CharField(max_length=100, default='Start a project')
    cta_link = models.CharField(max_length=200, default='/contact')
    secondary_cta_text = models.CharField(max_length=100, default='See products')
    secondary_cta_link = models.CharField(max_length=200, default='/products')
    image = models.ImageField(upload_to='content/hero/', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Hero Section'
        verbose_name_plural = 'Hero Sections'

    def __str__(self):
        return self.headline


class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=50, help_text='Lucide icon name')
    features = models.JSONField(default=list)
    technologies = models.JSONField(default=list)
    image = models.ImageField(upload_to='content/services/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='content/team/', blank=True, null=True)
    linkedin = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    email = models.EmailField(blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class Testimonial(models.Model):
    quote = models.TextField()
    author = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    image = models.ImageField(upload_to='content/testimonials/', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.author} - {self.company}"