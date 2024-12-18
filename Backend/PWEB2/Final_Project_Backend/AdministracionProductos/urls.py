from django.urls import path
from .views import HotelListCreateView, HotelDetailView, BookingListCreateView, create_booking, search_hotels

urlpatterns = [
    path("hotels/", HotelListCreateView.as_view(), name="hotel-list-create"),
    path("hotels/<int:pk>/", HotelDetailView.as_view(), name="hotel-detail"),
    path("bookings/", BookingListCreateView.as_view(), name="booking-list-create"),
    path('hotels/<int:hotel_id>/book/', create_booking, name='create_booking'),
    path('search/', search_hotels, name='search_hotels'),
]