import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/SearchResults.css";
import { HotelCard } from "./HotelCard";

export function SearchResults() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    
    useEffect(() => {
        const fetchHotels = async () => {
            const params = new URLSearchParams(location.search);
            const query = params.get('q');

            if (!query) return;

            try {
                const response = await axios.get(`http://localhost:8000/api/search/?q=${query}`);
                setHotels(response.data);
            } catch (error) {
                console.error("Error al buscar hoteles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, [location.search]);

    return (
        <div className="search-results">
            <h2>Resultados de la búsqueda</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : hotels.length > 0 ? (
                <div className="results-grid">
                    {hotels.map(hotel => (
                        <HotelCard
                            className={"hotel-card"}
                            key={hotel.id}
                            name={hotel.name}
                            image={hotel.image}
                            rating={hotel.rating}
                            location={hotel.location}
                        />
                    ))}
                </div>
            ) : (
                <p>No se encontraron hoteles para tu búsqueda.</p>
            )}
        </div>
    );
}
