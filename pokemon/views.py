from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, viewsets
from django.contrib.auth.models import User
from .models import Pokemon

from .serializers import PokemonSerializer, UserSerializer

# Create your views here.
def home(request):
    return HttpResponse('Pokemon API')

class PokemonViewSet(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
