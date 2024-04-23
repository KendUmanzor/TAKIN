from django.urls import path, include

from rest_framework import routers
from .api import empleadoViewSet
from .views import EmpleadorViewSet, OficioViewSet, EmpleadoViewSet, CalificacionViewSet, ContratoViewSet, login, perfil

router =routers.DefaultRouter()




router.register(r'api/oficios', OficioViewSet, basename='oficio')
router.register(r'api/empleados', EmpleadoViewSet, basename='empleado')
router.register(r'empleadores', EmpleadorViewSet, basename='empleador')
router.register(r'api/calificaciones', CalificacionViewSet, basename='calificacion')
router.register(r'api/contratos', ContratoViewSet, basename='contrato')


urlpatterns = [
    path('', include(router.urls)),
    path('login',login),
    path('perfil',perfil),

]
