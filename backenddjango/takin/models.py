from typing import Any
from django.db import models
from abc import ABC,abstractclassmethod
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Oficio(models.Model):
    nombre = models.CharField(max_length=100)

class Ubicacion(models.Model):
    pais = models.CharField(max_length=100)
    depto = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    colonia = models.CharField(max_length=100)

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)


class Contrato(models.Model):

    ubicacion = models.CharField(max_length=100)
    pago = models.DecimalField(max_digits=10, decimal_places=2)
    titulo = models.CharField(max_length=100)
    oficio = models.ForeignKey(Oficio, verbose_name=(""), on_delete=models.CASCADE)


class Empleado(Usuario):

    oficios = models.ManyToManyField(Oficio, related_name='empleados',blank=True)
    email = models.EmailField()
    password = models.CharField(max_length=100)



class Empleador(Usuario):
    ubicacion = models.CharField(max_length=100,null=True)
    email= models.EmailField()
    password = models.CharField(max_length=100)
    contratos = models.ManyToManyField(Contrato, related_name='empleadores',default=[],blank=True)


class Postulacion(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='postulaciones')
    contrato = models.ForeignKey(Contrato, on_delete=models.CASCADE, related_name='postulantes')
    fecha_postulacion = models.DateTimeField(auto_now_add=True)

class Calificacion(models.Model):

    contrato = models.ForeignKey(Contrato, on_delete=models.CASCADE, related_name='calificaciones')
    puntuacion = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comentario = models.TextField()
    fecha_calificacion = models.DateTimeField(auto_now_add=True)

