from django.db import models
import os
import random
from django.db.models.signals import pre_save
from new_project.utils import unique_slug_generator
from django.urls import reverse
from django.utils.translation import gettext as _
import datetime
from datetime import datetime
from .choices import CATEGORY_CHOICES

def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext

def upload_image_path(instance, filename):
    date_time = datetime.now()
    formatedDate = date_time.strftime("%Y-%m-%d")
    title = instance.title.replace(" ", "")
    new_filename = random.randint(1, 5000000)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext)
    return "comics/{date_time}/{title}/{final_filename}".format(date_time=formatedDate, title=title, final_filename=final_filename)

YEAR_CHOICES = []
for r in range(1980, (datetime.now().year+1)):
    YEAR_CHOICES.append((r,r))

class Comic(models.Model):
    title = models.CharField(max_length=40)
    slug = models.SlugField(max_length=100, blank=True, unique=True)
    description = models.TextField(max_length=600, blank=True, null=True)
    is_published = models.IntegerField(_('year'), choices=YEAR_CHOICES, default=datetime.now().year)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    author = models.CharField(max_length=100, blank=True, null=True)
    series = models.CharField(max_length=100, blank=True, null=True)
    artist = models.CharField(max_length=100, blank=True, null=True)
    universe = models.CharField(max_length=100, blank=True, null=True)
    photo_main = models.ImageField(upload_to=upload_image_path)
    photo_1 = models.ImageField(upload_to=upload_image_path, blank=True)
    photo_2 = models.ImageField(upload_to=upload_image_path, blank=True)
    photo_3 = models.ImageField(upload_to=upload_image_path, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='NO-CAT')
    is_published = models.BooleanField(default=True)
    timestamp = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        # return "/products/{slug}".format(slug=self.slug) # hard-coded return
        return reverse("product_detail", kwargs={"slug": self.slug})

def product_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(product_pre_save_receiver, sender=Comic)