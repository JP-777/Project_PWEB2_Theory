from rest_framework import serializers
from .models import Hotel, Booking

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'description', 'location', 'price_per_night',
                  'available_rooms', 'amenities', 'image', 'date_created']
        read_only_fields = ['id', 'owner', 'date_created']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'user', 'hotel', 'check_in', 'check_out', 'total_price']
        read_only_fields = ['user', 'total_price']