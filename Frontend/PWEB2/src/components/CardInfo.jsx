/* eslint-disable react/prop-types */
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/CardInfo.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function CardInfo ({ title, description, images }) {
  return (
    <div className='card'>

        <div className='info'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='carousel'
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} className='image' />
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
  );
}