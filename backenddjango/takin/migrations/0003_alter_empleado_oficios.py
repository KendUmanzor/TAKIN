# Generated by Django 5.0.4 on 2024-04-22 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('takin', '0002_alter_empleado_oficios'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empleado',
            name='oficios',
            field=models.ManyToManyField(blank=True, related_name='empleados', to='takin.oficio'),
        ),
    ]