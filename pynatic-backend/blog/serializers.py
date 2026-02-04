from rest_framework import serializers
from .models import BlogPost, BlogCategory


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = ['id', 'name', 'slug', 'description']


class BlogPostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    tags_list = serializers.ListField(source='get_tags_list', read_only=True)
    formatted_date = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'excerpt', 'content', 'category',
            'author', 'author_name', 'created_at', 'updated_at',
            'formatted_date', 'image', 'tags', 'tags_list',
            'is_published', 'read_time'
        ]
        read_only_fields = ['created_at', 'updated_at']

    def get_formatted_date(self, obj):
        return obj.created_at.strftime('%b %d, %Y')