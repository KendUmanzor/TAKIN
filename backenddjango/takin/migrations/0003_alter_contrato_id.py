# Generated by Django 5.0.4 on 2024-04-22 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('takin', '0002_alter_contrato_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contrato',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
