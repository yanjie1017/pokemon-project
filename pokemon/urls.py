from django.urls import path
from .views import home, PokemonView, UserViewSet
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('poke', PokemonView)

urlpatterns = [
    path('', include(router.urls))
]