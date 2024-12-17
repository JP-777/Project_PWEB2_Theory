
import React, { useState } from 'react';
import '../styles/precios.css';

import limaImg from '../assets/lima.jpg';
import paracasImg from '../assets/paracas.jpg';
import cuzcoImg from '../assets/cuzco.jpg';
import madridImg from '../assets/madrid.jpg';
import cartagenaImg from '../assets/cartagena.jpg';
import arequipaImg from '../assets/arequipa.jpg';
import parisImg from '../assets/paris.jpg';
import piuraImg from '../assets/piura.jpg';
import rioImg from '../assets/rio.jpg';


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
  const cityPrices = {
    Lima: [
      { mes: 'Noviembre', rango: 'S/ 160 - S/ 425' },
      { mes: 'Diciembre', rango: 'S/ 160 - S/ 445' },
      { mes: 'Enero', rango: 'S/ 170 - S/ 435' },
    ],
    Paracas: [
      { mes: 'Noviembre', rango: 'S/ 180 - S/ 450' },
      { mes: 'Diciembre', rango: 'S/ 190 - S/ 460' },
      { mes: 'Enero', rango: 'S/ 200 - S/ 470' },
    ],
    Cuzco: [
      { mes: 'Noviembre', rango: 'S/ 200 - S/ 470' },
      { mes: 'Diciembre', rango: 'S/ 210 - S/ 480' },
      { mes: 'Enero', rango: 'S/ 220 - S/ 490' },
    ],
    Madrid: [
      { mes: 'Noviembre', rango: '€ 60 - € 120' },
      { mes: 'Diciembre', rango: '€ 70 - € 130' },
      { mes: 'Enero', rango: '€ 80 - € 140' },
    ],
    Cartagena: [
      { mes: 'Noviembre', rango: '$ 50 - $ 110' },
      { mes: 'Diciembre', rango: '$ 55 - $ 115' },
      { mes: 'Enero', rango: '$ 60 - $ 120' },
    ],
    Arequipa: [
      { mes: 'Noviembre', rango: 'S/ 150 - S/ 400' },
      { mes: 'Diciembre', rango: 'S/ 160 - S/ 410' },
      { mes: 'Enero', rango: 'S/ 170 - S/ 420' },
    ],
    París: [
      { mes: 'Noviembre', rango: '€ 90 - € 180' },
      { mes: 'Diciembre', rango: '€ 100 - € 190' },
      { mes: 'Enero', rango: '€ 110 - € 200' },
    ],
    Piura: [
      { mes: 'Noviembre', rango: 'S/ 140 - S/ 370' },
      { mes: 'Diciembre', rango: 'S/ 150 - S/ 380' },
      { mes: 'Enero', rango: 'S/ 160 - S/ 390' },
    ],
    RíodeJaneiro: [
      { mes: 'Noviembre', rango: 'R$ 300 - R$ 600' },
      { mes: 'Diciembre', rango: 'R$ 350 - R$ 650' },
      { mes: 'Enero', rango: 'R$ 400 - R$ 700' },
    ],
  };
   
  const Precios = () => {
    const [selectedCity, setSelectedCity] = useState('Lima');
    
    
    return (
      <div
        className="precios-container"
        style={{
          backgroundImage: `url(${cityBackgrounds[selectedCity]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <div className="ciudades">
          {Object.keys(cityBackgrounds).map((city) => (
            <button
              key={city}
              className={`ciudad ${selectedCity === city ? 'active' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
  
        <div className="precios-lista">
          {cityPrices[selectedCity].map((item, index) => (
            <div key={index} className="precio-item">
              <span className="mes">{item.mes}</span>
              <span className="rango">{item.rango}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Precios;
