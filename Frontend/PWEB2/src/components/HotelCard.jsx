import React, { useRef } from "react";
import "../css/HotelCard.css";

const hotels = [
    { 
        name: "Hotel Paraíso", 
        image: "https://media.admagazine.com/photos/65b16818a35d203a72ec2f1c/16:9/w_1920,c_limit/HKTVT_8438978059%20(1).jpg", 
        rating: "8.5", 
        location: "Playa"
    },
    { 
        name: "Montaña Azul", 
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=440,fit=crop/Yg2lZbWDWNSqXW6D/vpx-asia-hotel-web-A85pv5qgNvt4jnjG.jpg", 
        rating: "8.0", 
        location: "Montañas"
    },
    { 
        name: "Lujo Urbano", 
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513100970.jpg?k=ce65f8d279e2d1c2811ed401c400e61f0ca02265f4cfd2f7017b780ef1610eba&o=", 
        rating: "9.2", 
        location: "Centro"
    },
    { 
        name: "Vista al Mar", 
        image: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/21/27/ac2cb9b267561948ef63cc532112b4c14f2e19c60e53ae5c0f6aab6eee7c.jpeg", 
        rating: "9.5", 
        location: "Costa"
    },
    { 
        name: "Refugio Natural", 
        image: "https://www.civitfun.com/blog/wp-content/uploads/2024/04/habitacion-hotel-sostenible.jpeg", 
        rating: "8.7", 
        location: "Selva"
    },
];

const HotelCard = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="hotel-carousel-container">
            <button className="nav-button left" onClick={scrollLeft}>
                &#8249;
            </button>
            <div className="hotel-carousel" ref={carouselRef}>
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} />
                        <div className="hotel-info">
                            <h4 className="hotel-title">{hotel.name}</h4>
                            <p className="hotel-rating">★ {hotel.rating} - Excelente</p>
                            <p className="hotel-location">
                                <span className="location-icon">
                                    {/* SVG INLINE */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-4.418 0-8 3.582-8 8 0 6.627 8 16 8 16s8-9.373 8-16c0-4.418-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                                    </svg>
                                </span>
                                {hotel.location}
                            </p>
                            <button className="more-info-btn">Más información</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="nav-button right" onClick={scrollRight}>
                &#8250;
            </button>
        </div>
    );
};

export default HotelCard;
