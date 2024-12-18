import { useRef } from "react";
import "../styles/CardsBar.css";
import { HotelCard } from "./HotelCard";

const hotels = [
    {   
        id : 1,
        name: "Hotel Paraíso", 
        image: "https://media.admagazine.com/photos/65b16818a35d203a72ec2f1c/16:9/w_1920,c_limit/HKTVT_8438978059%20(1).jpg", 
        rating: "8.5", 
        location: "Playa"
    },
    { 
        id : 2,
        name: "Montaña Azul", 
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=440,fit=crop/Yg2lZbWDWNSqXW6D/vpx-asia-hotel-web-A85pv5qgNvt4jnjG.jpg", 
        rating: "8.0", 
        location: "Montañas"
    },
    { 
        id : 3,
        name: "Lujo Urbano", 
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513100970.jpg?k=ce65f8d279e2d1c2811ed401c400e61f0ca02265f4cfd2f7017b780ef1610eba&o=", 
        rating: "9.2", 
        location: "Centro"
    },
    { 
        id : 4,
        name: "Vista al Mar", 
        image: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/21/27/ac2cb9b267561948ef63cc532112b4c14f2e19c60e53ae5c0f6aab6eee7c.jpeg", 
        rating: "9.5", 
        location: "Costa"
    },
    { 
        id : 5,
        name: "Refugio Natural", 
        image: "https://www.civitfun.com/blog/wp-content/uploads/2024/04/habitacion-hotel-sostenible.jpeg", 
        rating: "8.7", 
        location: "Selva"
    },
];

export function CardsBar () {
    const carouselRef = useRef(null);
    const cardWidth = 300; // Ancho aproximado de cada tarjeta (ajusta si necesario)

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -cardWidth * 3, // Desplaza 3 tarjetas hacia la izquierda
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: cardWidth * 3, // Desplaza 3 tarjetas hacia la derecha
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="hotel-carousel-container">
            <button className="nav-button left" onClick={scrollLeft}>
                &#8249;
            </button>
            <div className="hotel-carousel" ref={carouselRef}>
                {hotels.map((hotel) => (
                    <HotelCard
                        key = {hotel.id}
                        name = {hotel.name}
                        image = {hotel.image}
                        rating = {hotel.rating}
                        location = {hotel.location}
                    />
                ))}
            </div>
            <button className="nav-button right" onClick={scrollRight}>
                &#8250;
            </button>
        </div>
    );
};