import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardsBar } from './components/CardsBar.jsx';
import { Prices } from './components/Prices';
import { Features } from './components/Features';
import { Promote } from './components/Promote.jsx';

export function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userPhoto, setUserPhoto] = useState(""); 
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};

        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const isExpired = payload.exp * 1000 < Date.now();
                if (!isExpired) {
                    setIsAuthenticated(true);
                    setUserPhoto(userInfo.photo || "https://unavatar.io/default");
                    setUserName(userInfo.name || "Usuario");
                } else {
                    console.warn('El token ha expirado');
                    localStorage.removeItem('token');
                    localStorage.removeItem('userInfo');
                }
            } catch (error) {
                console.error('Token inválido:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('userInfo');
            }
        }
    }, []);

    const handleLoginSuccess = (userData) => {
        setIsAuthenticated(true);
        setUserPhoto(userData.photo || "https://unavatar.io/default");
        setUserName(userData.name || "Usuario");
        localStorage.setItem('userInfo', JSON.stringify(userData)); // Guardar datos del usuario
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        setIsAuthenticated(false);
        setUserPhoto("");
        setUserName("");
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <NavBar
                        isAuthenticated={isAuthenticated}
                        selfProfilePhoto={userPhoto}
                        selfProfileName={userName}
                        onLogout={handleLogout}
                    />
                </nav>
                
                <div className="principalBody">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h1>🌎 Explora, Descubre y Ahorra</h1>
                                <Prices />
                                <Features />
                                <h2>Encuentra Tu Hotel Ideal</h2>
                                <CardsBar />
                            </>
                        } />
                        <Route path="/promote" element={isAuthenticated ? <Promote /> : <LoginForm onLoginSuccess={handleLoginSuccess} />} />
                        <Route path="/login" element={
                            isAuthenticated ? 
                            (<h1>Ya has iniciado sesión</h1>) :
                            (<LoginForm onLoginSuccess={handleLoginSuccess} />)
                        } />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="*" element={<h1>Página no encontrada</h1>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
