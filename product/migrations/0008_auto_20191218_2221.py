# Generated by Django 2.2.5 on 2019-12-18 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_auto_20191218_2219'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comic',
            name='category',
            field=models.CharField(choices=[('dc', 'DC Comics'), ('marvel', 'Marvel Comics'), ('accessories', 'Accessories'), ('other', 'Other'), ('no-cat', 'No cat')], default='NO-CAT', max_length=50),
        ),
    ]
