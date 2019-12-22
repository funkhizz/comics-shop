from django.db import models
from django.db.models import signals
from django.core.mail import send_mail

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField(max_length=200)


    def __str__(self):
        return self.name

def contact_client(sender, instance, created, **kwargs):
    send_mail(
    'Subject here',
    instance.name + ' with email: ' + instance.email + ' sent you message: ' + '"' + instance.message + '"',
    'from@example.com',
    ['to@example.com'],
    fail_silently=False,
    )


signals.post_save.connect(receiver=contact_client, sender=Contact)