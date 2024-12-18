/* eslint-disable react/prop-types */
import { useRef } from "react";
import "../styles/CityCardsBar.css";
import { HotelCard } from "./HotelCard";

export function CityCardsBar({ hotels }) {
    const carouselRef = useRef(null);
    const cardWidth = 300;

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -cardWidth * 3,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: cardWidth * 3,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="hotel-carousel-container">
            <button className="nav-button left" onClick={scrollLeft}>
                &#8249;
            </button>
            <div className="hotel-carousel" ref={carouselRef}>
                {hotels.length > 0 ? (
                    hotels.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            id={hotel.id}
                            name={hotel.name}
                            image={hotel.image}
                            rating={hotel.rating}
                            location={hotel.location}
                            pricePerNight={hotel.price_per_night}
                        />
                    ))
                ) : (
                    <p>No hay hoteles disponibles.</p>
                )}
            </div>
            <button className="nav-button right" onClick={scrollRight}>
                &#8250;
            </button>
        </div>
    );
}
