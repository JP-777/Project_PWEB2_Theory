/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/BookingForm.css";
import axios from "axios";

export function BookingForm({ hotelId, pricePerNight, onBookingSuccess }) {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            setError("Debes iniciar sesión para realizar una reserva.");
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:8000/api/hotels/${hotelId}/book/`,
                { check_in: checkIn, check_out: checkOut },
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            onBookingSuccess(response.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error al realizar la reserva.");
        }
    };

    return (
        <div className="booking-form">
            <h2>Reservar este Hotel</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fecha de Entrada:</label>
                    <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Fecha de Salida:</label>
                    <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                    />
                </div>
                <p>Precio por Noche: ${pricePerNight}</p>
                {error && <p className="error">{error}</p>}
                <button type="submit">Reservar</button>
            </form>
        </div>
    );
}
