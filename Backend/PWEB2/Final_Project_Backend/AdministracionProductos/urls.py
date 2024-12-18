from django.urls import path
from .views import HotelListCreateView, HotelDetailView, BookingListCreateView

urlpatterns = [
    path("hotels/", HotelListCreateView.as_view(), name="hotel-list-create"),
    path("hotels/<int:pk>/", HotelDetailView.as_view(), name="hotel-detail"),
    path("bookings/", BookingListCreateView.as_view(), name="booking-list-create"),
]