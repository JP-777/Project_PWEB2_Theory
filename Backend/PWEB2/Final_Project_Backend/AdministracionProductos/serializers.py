from rest_framework import serializers
from .models import Hotel, Booking

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'description', 'location', 'price_per_night',
                  'available_rooms', 'amenities', 'image', 'date_created']
        read_only_fields = ['id', 'owner', 'date_created']  # Estos campos son asignados automáticamente

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"
