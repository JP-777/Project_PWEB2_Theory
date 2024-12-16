from django.db import models
from sqlalchemy import Column, Integer, String
from AutenticacionUsuarios.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String, nullable=True)
    is_active = Column(String, default=True)

    def __str__(self):
        return self.nombre
