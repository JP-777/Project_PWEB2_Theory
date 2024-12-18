from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import User
from .serializers import UserSerializer, UserProfileSerializer
from AdministracionProductos.models import Booking
from AdministracionProductos.serializers import BookingSerializer

@api_view(["POST"])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(serializer.validated_data["password"])
        user.save()

        token, _ = Token.objects.get_or_create(user=user)

        return Response({
            "message": "Usuario registrado exitosamente",
            "token": token.key,
            "email": user.email
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def login_user(request):
    email = request.data.get("email")
    password = request.data.get("password")
    user = authenticate(request, email=email, password=password)

    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            "token": token.key,
            "user": {
                "email": user.email,
                "full_name": user.full_name,
                "profile_photo": user.profile_photo
            }
        }, status=status.HTTP_200_OK)
    return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(["GET", "PUT"])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user

    if request.method == "GET":
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        serializer = UserProfileSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_bookings(request):
    bookings = Booking.objects.filter(user=request.user).order_by("-date_booked")
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
