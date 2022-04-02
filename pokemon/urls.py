from django.urls import path
from .views import PokemonViewSet, UserViewSet
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('user', UserViewSet)

get_user_id = UserViewSet.as_view({'get': 'get_id'})
pokemon_list_all = PokemonViewSet.as_view({'get': 'list'})
pokemon_list_unowned = PokemonViewSet.as_view(actions={'get': 'list_unowned'})
pokemon_list_owned = PokemonViewSet.as_view(actions={'get': 'list_owned'})
pokemon_list_not_captured = PokemonViewSet.as_view(actions={'get': 'list_not_captured'})
pokemon_create = PokemonViewSet.as_view({'post': 'create'})
pokemon_add = PokemonViewSet.as_view(actions={'post': 'add'})
pokemon_release = PokemonViewSet.as_view(actions={'post': 'release'})

urlpatterns = [
    path('', include(router.urls)),
    path('pokemon/allpokemon', pokemon_list_all),
    path('pokemon/createpokemon', pokemon_create),
    path('pokemon/unownedpokemon/<int:pk>', pokemon_list_unowned),
    path('pokemon/mypokemon/<int:pk>', pokemon_list_owned),
    path('pokemon/freepokemon', pokemon_list_not_captured),
    path('pokemon/addpokemon', pokemon_add),
    path('pokemon/releasepokemon', pokemon_release),
    path('user/username/<str:pk>', get_user_id)
]