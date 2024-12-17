/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import '../styles/Forms.css'

export function LoginForm({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:8000/login/", {
                email: email,
                password,
            });
    
            const { access_token } = response.data;
    
            localStorage.setItem("token", access_token);
    
            onLoginSuccess(access_token);
        } catch (error) {
            alert("Credenciales incorrectas o problema con el servidor." + error);
        }
    };
    

    const handleSuccess = async (response) => {
        try {
            const { credential } = response;
    
            console.log("Google Credential:", credential); // Verificar el token de Google
    
            // Envía el token de Google al backend para validarlo y obtener un JWT
            const res = await axios.post('http://localhost:8000/google-login/', { token: credential });
    
            // Extrae el JWT del backend
             const { token: token, userId } = res.data;
    
            // Almacena el JWT en localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
    
            // Notifica que el inicio de sesión fue exitoso
            onLoginSuccess(token);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message); // Muestra el error en detalle
            alert('Error al iniciar sesión con Google.');
        }
    };
    
    
    const handleError = () => {
        console.error('Error al iniciar sesión con Google');
    };
        

    return (
        <div className="form-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <label>E-mail:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
            />
            <Link to="/register">¿No tienes una cuenta? Regístrate</Link>
        </div>
    );
}
