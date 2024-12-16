from fastapi import FastAPI
from app import auth, google_auth, database, models

app = FastAPI()

# Crear tablas
models.Base.metadata.create_all(bind=database.engine)

# Registrar rutas
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(google_auth.router, prefix="/auth/google", tags=["Google Auth"])
