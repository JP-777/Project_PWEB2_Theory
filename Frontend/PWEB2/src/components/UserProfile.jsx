import { useState, useEffect } from "react";
import "../styles/UserProfile.css";
import axios from "axios";

export function UserProfile() {
    const [userInfo, setUserInfo] = useState({});
    const [reservations, setReservations] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get("http://localhost:8000/profile/", {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                setUserInfo(response.data);
                setFormData({
                    full_name: response.data.full_name || "",
                    email: response.data.email || "",
                });
            } catch (error) {
                console.error("Error al obtener la información del usuario:", error);
            }
        };

        const fetchReservations = async () => {
            try {
                const response = await axios.get("http://localhost:8000/profile/bookings/", {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                setReservations(response.data);
            } catch (error) {
                console.error("Error al obtener las reservas:", error);
            }
        };

        fetchUserInfo();
        fetchReservations();
    }, [token]);

    const handleEdit = () => setIsEditing(true);

    const handleCancel = () => setIsEditing(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        try {
            await axios.put(
                "http://localhost:8000/profile/",
                formData,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            setUserInfo({ ...userInfo, ...formData });
            setIsEditing(false);
        } catch (error) {
            console.error("Error al actualizar la información del usuario:", error);
        }
    };

    return (
        <div className="user-profile">
            <h1>Perfil del Usuario</h1>
            <div className="profile-section">
                <h2>Información Personal</h2>
                <div className="profile-header">
                    <img
                        src={userInfo.profile_photo || "https://via.placeholder.com/150"}
                        alt="Foto de perfil"
                        className="profile-photo"
                    />
                    {isEditing ? (
                        <div className="profile-form">
                            <label>
                                Nombre Completo:
                                <input
                                    type="text"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Correo Electrónico:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <button onClick={handleSave}>Guardar</button>
                            <button onClick={handleCancel}>Cancelar</button>
                        </div>
                    ) : (
                        <div className="profile-info">
                            <p><strong>Nombre:</strong> {userInfo.full_name}</p>
                            <p><strong>Correo:</strong> {userInfo.email}</p>
                            <button onClick={handleEdit}>Editar Información</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="reservations-section">
                <h2>Mis Reservas</h2>
                {reservations.length > 0 ? (
                    <ul>
                        {reservations.map((reservation) => (
                            <li key={reservation.id}>
                                <p><strong>Hotel:</strong> {reservation.hotel_name}</p>
                                <p><strong>Fecha Entrada:</strong> {reservation.check_in}</p>
                                <p><strong>Fecha Salida:</strong> {reservation.check_out}</p>
                                <p><strong>Precio Total:</strong> ${reservation.total_price}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No tienes reservas registradas.</p>
                )}
            </div>
        </div>
    );
}
