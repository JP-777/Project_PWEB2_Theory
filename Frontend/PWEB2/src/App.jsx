import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HotelCard from './components/HotelCard'; // Importa el componente HotelCard
import Precios from './components/Precios'; // Importa el componente HotelCard
import TrivagoFeatures from './components/TrivagoFeatures'; // Importa el componente HotelCard
export function App() {

    useEffect(() => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const isExpired = payload.exp * 1000 < Date.now();
                if (!isExpired) {
                    setIsAuthenticated(true);
                } else {
                    console.warn('El token ha expirado');
                    localStorage.removeItem('token');
                }
            } catch (error) {
                console.error('Token inválido:', error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div className="App">
                {isAuthenticated && (
                    <nav>
                        <NavBar
                            selfProfilePhoto={`https://unavatar.io/JP-777`}
                            selfProfileName="JP-777"
                        />
                    </nav>
                )}
                <div className="principalBody">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                isAuthenticated ? (
                                    <>
                                        <h1>🌎 Explora, Descubre y Ahorra</h1>
                                        <Precios />
                                        <TrivagoFeatures />
                                        <h2>Encuentra Tu Hotel Ideal</h2>
                                        <HotelCard /> {/* HotelCard agregado aquí */}
                                    </>
                                ) : (
                                    <Navigate to="/login" />
                                )
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                isAuthenticated ? (
                                    <Navigate to="/" />
                                ) : (
                                    <LoginForm onLoginSuccess={handleLoginSuccess} />
                                )
                            }
                        />
                        <Route
                            path="/register"
                            element={<RegisterForm />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
