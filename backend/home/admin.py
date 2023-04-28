from django.contrib import admin
from .models import EBank,EShop,Ewallet,Transactions
admin.site.register(Ewallet)
admin.site.register(Transactions)
admin.site.register(EBank)
admin.site.register(EShop)

# Register your models here.
