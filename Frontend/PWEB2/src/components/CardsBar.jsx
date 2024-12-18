import { useRef, useEffect, useState } from "react";
import axios from "axios";
import "../styles/CardsBar.css";
import { HotelCard } from "./HotelCard";

export function CardsBar () {
    const [hotels, setHotels] = useState([]);
    const carouselRef = useRef(null);
    const cardWidth = 300;

    const fetchHotels = async () => {
        const token = localStorage.getItem("token"); // Recuperar el token del almacenamiento local
    
        try {
            const response = await axios.get("http://localhost:8000/api/hotels/", {
                headers: {
                    Authorization: `Token ${token}`, // Incluir el token en la solicitud
                },
            });
            console.log("Respuesta del backend:", response.data);
            setHotels(response.data); // Actualizar el estado con los datos recibidos
        } catch (error) {
            console.error("Error al obtener los hoteles:", error);
        }
    };
    

    useEffect(() => {
        fetchHotels();
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -cardWidth * 3,
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: cardWidth * 3, 
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
            {hotels.length > 0 ? (
                hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        name={hotel.name}
                        image={hotel.image}
                        rating={hotel.rating}
                        location={hotel.location}
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
};