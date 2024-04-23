from .models import Empleado
from rest_framework import viewsets,permissions
from .serializador import EmpleadoSerializer

class empleadoViewSet(viewsets.ModelViewSet):
    queryset= Empleado.objects.all()
    permission_classes=[permissions.AllowAny]
    serializer_class=EmpleadoSerializer
