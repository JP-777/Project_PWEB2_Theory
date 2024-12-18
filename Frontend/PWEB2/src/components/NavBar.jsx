/* eslint-disable react/prop-types */
import '../styles/NavBar.css';
import logo from './icons/logo.svg';
import search from './icons/search.svg';

export function NavBar({ isAuthenticated, selfProfilePhoto, selfProfileName, onLogout }) {
    return (
        <div className="navBar">
            <img className="logo" alt="Logo" src={logo} />

            <div className="searchContainer">
                <input
                    autoComplete="off"
                    className="searchInput"
                    type="text"
                    placeholder="Buscar hoteles, lugares..."
                />
                <img className="searchIcon" src={search} alt="Search" />
            </div>

            <div className="navButtons">
                <ul>
                    <li><a href="/map">Mapa</a></li>
                    <li><a href="/promote">Publica tu Propiedad</a></li>
                </ul>
            </div>

            <div className="authControls">
                {isAuthenticated ? (
                    <div className="selfProfile">
                        <img className="selfProfilePhoto" alt="Profile Photo" src={selfProfilePhoto} />
                        <strong>{selfProfileName}</strong>
                        <button className="logoutButton" onClick={onLogout}>Cerrar Sesión</button>
                    </div>
                ) : (
                    <>
                        <a href="/register" className="authButton">Crear cuenta</a>
                        <a href="/login" className="authButton">Iniciar sesión</a>
                    </>
                )}
            </div>
        </div>
    );
}
