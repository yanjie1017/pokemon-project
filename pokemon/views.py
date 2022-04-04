from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import action

from rest_framework import generics, viewsets, status
from django.contrib.auth.models import User
from .models import Pokemon
from .serializers import PokemonSerializer, UserSerializer

# Create your views here.
class PokemonViewSet(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
    @action(methods=["GET"], detail=False)
    def list_not_captured(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(owner__isnull=True)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=["GET"], detail=False)
    def list_unowned(self, request, *args, **kwargs):
        user_id = kwargs['pk']
        queryset = self.get_queryset().exclude(owner=user_id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=["GET"], detail=False)
    def list_owned(self, request, *args, **kwargs):
        user_id = kwargs['pk']
        queryset = self.get_queryset().filter(owner=user_id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=["POST"], detail=False)
    def add(self, request, *args, **kwargs):
        instance = self.queryset.get(pk=request.data['id'])
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        if serializer.is_valid():          
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=["POST"], detail=False)
    def release(self, request, *args, **kwargs):
        instance = self.queryset.get(pk=request.data['id'])
        request.data['owner'] = None
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        if serializer.is_valid():     
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=["GET"], detail=False)
    def get_id(self, request, *args, **kwargs):
        username = kwargs['pk']
        print(username)
        queryset = self.get_queryset().filter(username=username)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)