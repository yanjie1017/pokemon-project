from django.urls import path
from .views import home, PokemonViewSet, UserViewSet
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('pokemon', PokemonViewSet)

urlpatterns = [
    path('', include(router.urls))
]