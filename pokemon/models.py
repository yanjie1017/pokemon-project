from django.db import models
from django.conf import settings
import uuid

# Create your models here.

class Pokemon(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    hp = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    type = models.CharField(max_length=20)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )
    # userid
    # level
    def __str__(self):
        return self.name

# class OwnedPokemon(models.Model):
#     owner = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.SET_NULL
#     )
#     pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
