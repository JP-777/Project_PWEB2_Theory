/* eslint-disable react/prop-types */
import '../styles/HotelCard.css'
import { useState, useContext} from 'react';
import { CardInfo } from './CardInfo';
import { BookingForm } from './BookingForm';
import { SearchContext } from '../context/SearchContext';


export function HotelCard ( { id, image, name, rating, location, pricePerNight} ) {

    const { isSearching } = useContext(SearchContext);

    const [isOpen, setIsOpen] = useState(false);

    const handleCardClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // eslint-disable-next-line no-unused-vars
    const handleBookingSuccess = (data) => {
        alert("Reserva realizada exitosamente");
        closeModal();
    };

    return(
        <>
            <div className={isSearching ? "hotel-card-search" : "hotel-card"} onClick={handleCardClick}>
                <img src={image} alt={name} />
                <div className="hotel-info">
                    <h4 className="hotel-title">{name}</h4>
                    <p className="hotel-rating">★ {rating} - Excelente</p>
                    <p className="hotel-location">
                        <span className="location-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-4.418 0-8 3.582-8 8 0 6.627 8 16 8 16s8-9.373 8-16c0-4.418-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                            </svg>
                        </span>
                        {location}
                    </p>
                    <button className="more-info-btn">Más información</button>
                </div>
            </div>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="hotel-detail">
                            <div className="modal-hotel-card">
                                <img src={image} alt={name} />
                                <div className="hotel-info">
                                    <h4 className="hotel-title">{name}</h4>
                                    <p className="hotel-rating">★ {rating} - Excelente</p>
                                    <p className="hotel-location">
                                        <span className="location-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-4.418 0-8 3.582-8 8 0 6.627 8 16 8 16s8-9.373 8-16c0-4.418-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                                            </svg>
                                        </span>
                                        {location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-info">
                            <CardInfo 
                                title={name} 
                                description={`Calificación: ${rating}`} 
                                images={[image]} 
                            />
                        </div>
                        <div className='card-booking-form'>
                            <BookingForm
                                hotelId={id}
                                pricePerNight={pricePerNight}
                                onBookingSuccess={handleBookingSuccess}
                            />
                        </div>

                        <button className="close-button" onClick={closeModal}>✖</button>
                    </div>
                </div>
            )}

        </>
    )
}