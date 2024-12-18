import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardsBar } from './components/CardsBar.jsx';
import { Prices } from './components/Prices';
import { Features } from './components/Features';
import { Promote } from './components/Promote.jsx';
import { UserProfile } from './components/UserProfile.jsx';
import { SearchResults } from './components/SearchResults.jsx';

export function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const token = localStorage.getItem('token');
        return token !== null;
    });
    const [userPhoto, setUserPhoto] = useState(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
        return userInfo.profile_photo || "https://unavatar.io/Saul";
    });
    const [userName, setUserName] = useState(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
        return userInfo.full_name || "Capybara";
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const rawUserInfo = localStorage.getItem('userInfo');
        let userInfo = {};

        if (rawUserInfo) {
            try {
                userInfo = JSON.parse(rawUserInfo);
            } catch (error) {
                console.error('Error al parsear userInfo de localStorage:', error);
                userInfo = {};
            }
        }

        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const isExpired = payload.exp * 1000 < Date.now();
                if (!isExpired) {
                    setIsAuthenticated(true);
                    setUserPhoto(userInfo.profile_photo);
                    setUserName(userInfo.full_name);
                } else {
                    console.warn('El token ha expirado');
                    localStorage.removeItem('token');
                    localStorage.removeItem('userInfo');
                }
            } catch (error) {
                console.error('Token inválido:', error);
            }
        }
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            const token = localStorage.getItem('token');
            const userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
    
            if (token) {
                setIsAuthenticated(true);
                setUserPhoto(userInfo.profile_photo);
                setUserName(userInfo.full_name);
            } else {
                setIsAuthenticated(false);
            }
        };
    
        handleRouteChange();
        window.addEventListener("popstate", handleRouteChange);
    
        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, []);
    

    const handleLoginSuccess = (userData) => {
        setIsAuthenticated(true);
        setUserPhoto(userData.photo || "https://unavatar.io/default");
        setUserName(userData.name || "Usuario");
        localStorage.setItem('userInfo', JSON.stringify(userData));
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
                        <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <LoginForm onLoginSuccess={handleLoginSuccess} />} />
                        <Route path="/login" element={ isAuthenticated ? <Navigate to="/" /> : <LoginForm onLoginSuccess={handleLoginSuccess} />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="*" element={<h1>Página no encontrada</h1>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};