import requests
from fastapi import APIRouter, HTTPException
from app.config import settings

router = APIRouter()

@router.get("/google-login")
def google_login(token: str):
    url = f"https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={token}"
    response = requests.get(url)
    if response.status_code != 200:
        raise HTTPException(status_code=400, detail="Invalid Google token")
    data = response.json()
    email = data.get("email")
    if not email:
        raise HTTPException(status_code=400, detail="Google authentication failed")
    return {"email": email, "full_name": data.get("name")}
