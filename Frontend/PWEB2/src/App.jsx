import React from 'react';
import './App.css';
import Precios from './Componentes/Precios.jsx';
import TrivagoFeatures from './Componentes/TrivagoFeatures';

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <h1 className="titulo">Descubre el mejor momento para reservar</h1>
        <Precios />
      </div>
      <TrivagoFeatures />
    </div>
  );
}

export default App;

