from django.db import models

# Create your models here.

class Pokemon(models.Model):
    # id = models.UUIDField()
    name = models.CharField(max_length=20)
    hp = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    type = models.CharField(max_length=20)
    # userid
    # level
