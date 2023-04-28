from rest_framework import viewsets
from home.models import EBank,Ewallet,Transactions
from .serializers import EBankSerializer,EwalletSerializer,TransactionsSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class EwalletViewSet(viewsets.ModelViewSet):
    serializer_class = EwalletSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Ewallet.objects.all()

class TransactionsViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Transactions.objects.all()

class EBankViewSet(viewsets.ModelViewSet):
    serializer_class = EBankSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = EBank.objects.all()
