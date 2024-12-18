from django.urls import path
from . import views
from . import google_auth

urlpatterns = [
    path("register/", views.register_user, name="register_user"),
    path("login/", views.login_user, name="login_user"),
    path("google-login/", google_auth.google_login, name="google_login"),
    path("profile/", views.user_profile, name="user-profile"),
    path("profile/bookings/", views.user_bookings, name="user-bookings"),
]
