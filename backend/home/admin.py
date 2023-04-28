from django.contrib import admin
from .models import EBank,Ewallet,Transactions
admin.site.register(Ewallet)
admin.site.register(Transactions)
admin.site.register(EBank)

# Register your models here.
