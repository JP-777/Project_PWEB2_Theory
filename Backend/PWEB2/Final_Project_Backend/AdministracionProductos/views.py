from rest_framework import generics, permissions
from .models import Hotel, Booking
from .serializers import HotelSerializer, BookingSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from django.db.models import Q

class HotelListCreateView(generics.ListCreateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class HotelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class BookingListCreateView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_booking(request, hotel_id):
    try:
        hotel = Hotel.objects.get(id=hotel_id)
    except Hotel.DoesNotExist:
        return Response({"error": "Hotel no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    check_in = request.data.get("check_in")
    check_out = request.data.get("check_out")

    if not check_in or not check_out:
        return Response({"error": "Las fechas de entrada y salida son obligatorias"}, status=status.HTTP_400_BAD_REQUEST)

    check_in_date = datetime.strptime(check_in, "%Y-%m-%d").date()
    check_out_date = datetime.strptime(check_out, "%Y-%m-%d").date()

    if check_out_date <= check_in_date:
        return Response({"error": "La fecha de salida debe ser posterior a la fecha de entrada"}, status=status.HTTP_400_BAD_REQUEST)

    days = (check_out_date - check_in_date).days
    total_price = days * hotel.price_per_night

    booking = Booking.objects.create(
        user=request.user,
        hotel=hotel,
        check_in=check_in_date,
        check_out=check_out_date,
        total_price=total_price
    )

    serializer = BookingSerializer(booking)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def search_hotels(request):
    query = request.query_params.get('q', '')
    if not query:
        return Response({"error": "Por favor, proporciona un término de búsqueda."}, status=status.HTTP_400_BAD_REQUEST)
    
    hotels = Hotel.objects.filter(
        Q(name__icontains=query) |
        Q(location__icontains=query) |
        Q(description__icontains=query)
    )

    serializer = HotelSerializer(hotels, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)