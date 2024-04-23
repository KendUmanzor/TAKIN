from rest_framework import serializers
from takin.models import Empleado,Empleador,Usuario,Contrato, Postulacion,Calificacion,Oficio

class OficioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oficio
        fields = '__all__'
class CalificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calificacion
        fields = '__all__'

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'apellido', 'edad']

class ContratoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contrato
        fields = ['id', 'ubicacion', 'pago', 'titulo', 'rubro']
class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields ='__all__'
class EmpleadorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Empleador
        fields = '__all__'
class PostulacionSerializer(serializers.ModelSerializer):
    empleado = EmpleadoSerializer()
    contrato = ContratoSerializer()
    class Meta:
        model = Postulacion
        fields = ['id', 'empleado', 'contrato', 'fecha_postulacion']
