from django.db import models
from django.conf import settings

class Hotel(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    available_rooms = models.PositiveIntegerField()
    amenities = models.JSONField(default=dict)
    image = models.ImageField(upload_to="hotel_images/", null=True, blank=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="hotels")
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="bookings")  # Relación con User
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name="bookings")
    check_in = models.DateField()
    check_out = models.DateField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_booked = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Reserva de {self.user.email} en {self.hotel.name}"

