from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import EBankViewSet,EwalletViewSet,TransactionsViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('ewallet', EwalletViewSet )
router.register('transactions', TransactionsViewSet )
router.register('ebank', EBankViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
