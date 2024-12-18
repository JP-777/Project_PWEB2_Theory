import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token

@api_view(["POST"])
def google_login(request):
    token = request.data.get("token")
    if not token:
        return Response({"error": "Token no proporcionado"}, status=status.HTTP_400_BAD_REQUEST)

    google_url = f"https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={token}"
    response = requests.get(google_url)

    if response.status_code != 200:
        return Response({"error": "Token de Google inválido"}, status=status.HTTP_400_BAD_REQUEST)

    data = response.json()
    email = data.get("email")
    full_name = data.get("name")
    profile_photo = data.get("picture") 

    user, created = User.objects.get_or_create(
        email=email,
        defaults={
            "full_name": full_name,
            "password": make_password(None),
            "profile_photo": profile_photo 
        }
    )

    if not created and user.profile_photo != profile_photo:
        user.profile_photo = profile_photo
        user.save()

    drf_token, _ = Token.objects.get_or_create(user=user)

    return Response({
        "token": drf_token.key,
        "user": {
            "email": user.email,
            "full_name": user.full_name,
            "profile_photo": user.profile_photo
        }
    }, status=status.HTTP_200_OK)
