import React from 'react';
import '../styles/precios.css'; // Asegúrate de tener los estilos correctos o usa una nueva hoja de estilos

import SearchIcon from '../assets/Search.svg';
import CompareIcon from '../assets/Compare.svg';
import SaveIcon from '../assets/Save.svg';

const TrivagoFeatures = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <img src={SearchIcon} alt="Busca rápido" />
        <h3>Busca rápido</h3>
        <p>Busca entre 5 millones de hoteles en segundos.</p>
      </div>

      <div className="feature">
        <img src={CompareIcon} alt="Compara con confianza" />
        <h3>Compara con confianza</h3>
        <p>Compara precios de hotel de más de 100 páginas web al mismo tiempo.</p>
      </div>

      <div className="feature">
        <img src={SaveIcon} alt="Ahorra a lo grande" />
        <h3>Ahorra a lo grande</h3>
        <p>Descubre increíbles ofertas en nuestras páginas asociadas.</p>
      </div>
    </div>
  );
};

export default TrivagoFeatures;
