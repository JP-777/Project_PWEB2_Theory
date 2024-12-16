import React from 'react';
import { Navigation, Pagination } from 'swiper/modules'; // Opcional: Módulos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/cardinfo.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Micomponente({ title, description, images }) {
  return (
    <div style={styles.card}>

    <div style={styles.info}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

    
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={styles.carousel}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} style={styles.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}

const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      top: '-20px',
    },
    info: {
      marginBottom: '15px',
    },
    carousel: {
      width: '100%',
      height: '255px',
    },
    image: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
  };
