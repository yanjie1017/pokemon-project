from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Pokemon
from .serializers import PokemonSerializer

# Create your views here.
def home(request):
    return HttpResponse('Home')

class PokemonView(generics.CreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
