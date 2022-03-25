from django.contrib import admin
from .models import Pokemon

# Register your models here.
class PokemonAdmin(admin.ModelAdmin):
    list_display = ('name', 'hp', 'attack', 'defense', 'type')

admin.site.register(Pokemon)