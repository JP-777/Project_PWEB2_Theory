# Generated by Django 5.1.4 on 2024-12-18 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AdministracionProductos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hotel',
            name='rating',
            field=models.DecimalField(decimal_places=2, default=8.5, max_digits=10),
            preserve_default=False,
        ),
    ]
