import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ventas.css";

const Ventas = () => {
  const [hotelData, setHotelData] = useState({ nombre: "", costo: "", habitaciones: "" });
  const [hoteles, setHoteles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hotelData.nombre && hotelData.costo && hotelData.habitaciones) {
      setHoteles([...hoteles, hotelData]);
      setHotelData({ nombre: "", costo: "", habitaciones: "" });
    }
  };

  return (
    <div className="ventas-container">
      <h1>Registro de Hoteles</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="ventas-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Hotel"
          value={hotelData.nombre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="costo"
          placeholder="Costo por noche"
          value={hotelData.costo}
          onChange={handleChange}
        />
        <input
          type="number"
          name="habitaciones"
          placeholder="Número de Habitaciones"
          value={hotelData.habitaciones}
          onChange={handleChange}
        />
        <button type="submit" className="btn-submit">Agregar Hotel</button>
      </form>

      {/* Lista de hoteles */}
      <div className="hoteles-list">
        {hoteles.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <h3>{hotel.nombre}</h3>
            <p>Costo: ${hotel.costo}</p>
            <p>Habitaciones: {hotel.habitaciones}</p>

            {/* Swiper de ejemplo */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img src="https://via.placeholder.com/400x250?text=Hotel+1" alt="Hotel" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://via.placeholder.com/400x250?text=Hotel+2" alt="Hotel" />
              </SwiperSlide>
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ventas;