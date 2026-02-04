"""
URL configuration for pynatic project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse, HttpResponse

def api_root(request):
    """Root API endpoint showing available endpoints."""
    return JsonResponse({
        'message': 'Welcome to Pynatic API',
        'version': '1.0.0',
        'endpoints': {
            'admin': '/admin/',
            'blog': '/api/blog/',
            'contact': '/api/contact/',
            'content': '/api/content/',
        }
    })

def favicon(request):
    """Handle favicon requests to prevent 404 errors."""
    return HttpResponse(status=204)  # No content

urlpatterns = [
    path('', api_root, name='api-root'),
    path('favicon.ico', favicon, name='favicon'),
    path('icon', favicon, name='icon'),
    path('admin/', admin.site.urls),
    path('api/blog/', include('blog.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/content/', include('content.urls')),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
