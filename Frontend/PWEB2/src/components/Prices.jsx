import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Prices.css";

import limaImg from './assets/lima.jpg';
import paracasImg from './assets/paracas.jpg';
import cuzcoImg from './assets/cuzco.jpg';
import madridImg from './assets/madrid.jpg';
import cartagenaImg from './assets/cartagena.jpg';
import arequipaImg from './assets/arequipa.jpg';
import parisImg from './assets/paris.jpg';
import piuraImg from './assets/piura.jpg';
import rioImg from './assets/rio.jpg';

const cityBackgrounds = {
  Lima: limaImg,
  Paracas: paracasImg,
  Cuzco: cuzcoImg,
  Madrid: madridImg,
  Cartagena: cartagenaImg,
  Arequipa: arequipaImg,
  París: parisImg,
  Piura: piuraImg,
  RíodeJaneiro: rioImg,
};

const generatePriceRange = (basePrice) => {
    const minPrice = basePrice - 100 + Math.floor(Math.random() * 50); // Variación aleatoria
    const maxPrice = basePrice + 100 + Math.floor(Math.random() * 50);
    return `S/ ${minPrice} - S/ ${maxPrice}`;
};

export function Prices() {
    const [selectedCity, setSelectedCity] = useState("Lima");
    const navigate = useNavigate();

    const handleCityClick = (city) => {
        navigate(`/${city.toLowerCase()}`);
    };

    const basePrices = {
        Lima: 300,
        Paracas: 350,
        Cuzco: 400,
        Madrid: 500,
        Cartagena: 450,
        Arequipa: 300,
        París: 550,
        Piura: 320,
        RíodeJaneiro: 480,
    };

    return (
        <div
            className="precios-container"
            style={{
                backgroundImage: `url(${cityBackgrounds[selectedCity]})`,
                backgroundSize: "cover",
                backgroundPosition: selectedCity === 'RíodeJaneiro' ? 'center 20%' : 'center',
                color: "#fff",
                
            }}
        >
            <div className="ciudades">
                {Object.keys(cityBackgrounds).map((city) => (
                    <button
                        key={city}
                        className={`ciudad ${selectedCity === city ? "active" : ""}`}
                        onClick={() => setSelectedCity(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>

            <div className="precios-lista">
                {["Noviembre", "Diciembre", "Enero"].map((month, index) => (
                    <div
                        key={index}
                        className="precio-item"
                        onClick={() => handleCityClick(selectedCity)}
                    >
                        <span className="mes">{month}</span>
                        <span className="rango">
                            {generatePriceRange(basePrices[selectedCity])}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
