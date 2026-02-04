from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage, NewsletterSubscriber
from .serializers import ContactMessageSerializer, NewsletterSubscriberSerializer


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    http_method_names = ['post', 'get']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Send email notification
        try:
            send_mail(
                subject=f"New Contact Form Submission: {serializer.validated_data.get('subject', 'General Inquiry')}",
                message=f"Name: {serializer.validated_data['name']}\n"
                        f"Email: {serializer.validated_data['email']}\n"
                        f"Message: {serializer.validated_data['message']}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=True,
            )
        except Exception:
            pass  # Don't fail if email sending fails

        headers = self.get_success_headers(serializer.data)
        return Response(
            {'message': 'Thank you for your message. We will get back to you soon.'},
            status=status.HTTP_201_CREATED,
            headers=headers
        )


class NewsletterSubscriberViewSet(viewsets.ModelViewSet):
    queryset = NewsletterSubscriber.objects.filter(is_active=True)
    serializer_class = NewsletterSubscriberSerializer
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        
        # Check if already subscribed
        if NewsletterSubscriber.objects.filter(email=email).exists():
            return Response(
                {'message': 'You are already subscribed to our newsletter.'},
                status=status.HTTP_200_OK
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {'message': 'Thank you for subscribing to our newsletter!'},
            status=status.HTTP_201_CREATED
        )