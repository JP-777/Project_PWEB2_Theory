from django.test import TestCase
from .models import User

class UserTestCase(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(
            email="test@example.com",
            password="testpassword123",
            full_name="Test User"
        )
        self.assertEqual(user.email, "test@example.com")
        self.assertTrue(user.check_password("testpassword123"))
