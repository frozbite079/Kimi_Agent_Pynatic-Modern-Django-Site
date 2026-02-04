from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import BlogPost, BlogCategory
from .serializers import BlogPostSerializer, BlogCategorySerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        queryset = BlogPost.objects.filter(is_published=True)
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category__iexact=category)
        return queryset

    @action(detail=False, methods=['get'])
    def categories(self, request):
        categories = BlogPost.objects.filter(is_published=True).values_list('category', flat=True).distinct()
        return Response(list(categories))

    @action(detail=False, methods=['get'])
    def recent(self, request):
        count = int(request.query_params.get('count', 3))
        posts = self.get_queryset()[:count]
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def related(self, request, slug=None):
        post = self.get_object()
        related_posts = BlogPost.objects.filter(
            category=post.category,
            is_published=True
        ).exclude(id=post.id)[:3]
        serializer = self.get_serializer(related_posts, many=True)
        return Response(serializer.data)


class BlogCategoryViewSet(viewsets.ModelViewSet):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    lookup_field = 'slug'