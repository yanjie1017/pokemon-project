from django.urls import path
from .views import home, PokemonView

urlpatterns = [
    path('home', home),
    path('poke', PokemonView.as_view())
]