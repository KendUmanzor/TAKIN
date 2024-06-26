# Generated by Django 5.0.4 on 2024-04-22 19:05

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contrato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ubicacion', models.CharField(max_length=100)),
                ('pago', models.DecimalField(decimal_places=2, max_digits=10)),
                ('titulo', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Oficio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Ubicacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pais', models.CharField(max_length=100)),
                ('depto', models.CharField(max_length=100)),
                ('ciudad', models.CharField(max_length=100)),
                ('colonia', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Calificacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('puntuacion', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('comentario', models.TextField()),
                ('fecha_calificacion', models.DateTimeField(auto_now_add=True)),
                ('contrato', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='calificaciones', to='takin.contrato')),
            ],
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('usuario_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='takin.usuario')),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=100)),
                ('oficios', models.ManyToManyField(related_name='empleados', to='takin.oficio')),
            ],
            bases=('takin.usuario',),
        ),
        migrations.AddField(
            model_name='contrato',
            name='oficio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='takin.oficio', verbose_name=''),
        ),
        migrations.CreateModel(
            name='Postulacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_postulacion', models.DateTimeField(auto_now_add=True)),
                ('contrato', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='postulantes', to='takin.contrato')),
                ('empleado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='postulaciones', to='takin.empleado')),
            ],
        ),
        migrations.CreateModel(
            name='Empleador',
            fields=[
                ('usuario_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='takin.usuario')),
                ('ubicacion', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=100)),
                ('contratos', models.ManyToManyField(default=[], related_name='empleadores', to='takin.contrato')),
            ],
            bases=('takin.usuario',),
        ),
    ]
