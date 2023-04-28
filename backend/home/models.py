from django.conf import settings
from django.db import models
class Ewallet(models.Model):
    'Generated Model'
    belongs_to = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="ewallet_belongs_to",)
    btc_amount = models.BigIntegerField()
    eth_amount = models.BigIntegerField()
    passwd = models.CharField(max_length=256,)
    transactions = models.ForeignKey("home.Transactions",null=True,blank=True,on_delete=models.CASCADE,related_name="ewallet_transactions",)
class Transactions(models.Model):
    'Generated Model'
    to = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="transactions_to",)
    uuid = models.UUIDField()
class EBank(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    trusted = models.BooleanField()
