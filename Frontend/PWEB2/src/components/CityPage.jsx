import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BannerSlider } from "./BannerSlider";
import { CityCardsBar } from "./CityCardsBar";

const cityBanners = {
    lima: [
        {
            image: "https://whatatrip.pe/wp-content/uploads/2023/06/miraflores-view.png",
            title: "Explora Lima",
            description: "Los mejores hoteles en la capital peruana.",
        },
        {
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/340455271.jpg?k=9a6f9dec69dd7c74ec2bcfced42dc765b5046851075d3566d406d652f90c3085&o=&hp=1",
            title: "Disfruta de Lima",
            description: "Experiencias únicas en cada rincón.",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },
    ],
    paracas: [
        {
            image: "https://via.placeholder.com/1920x600?text=Paracas1",
            title: "Descubre Paracas",
            description: "Sol, playa y tranquilidad.",
        },
        {
            image: "https://via.placeholder.com/1920x600?text=Paracas2",
            title: "Vive Paracas",
            description: "La mejor experiencia costera.",
        },
    ],
    Cuzco: [
        {
            image: "https://via.placeholder.com/1920x600?text=Cuzco1",
            title: "Explora Cuzco",
            description: "Historia y cultura en el corazón de los Andes.",
        },
        {
            image: "https://via.placeholder.com/1920x600?text=Cuzco2",
            title: "Vive Cuzco",
            description: "Descubre la magia del Valle Sagrado.",
        },
    ],
};

export function CityPage() {
    const { city } = useParams();
    const [banners, setBanners] = useState([]);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchCityData = async () => {
            setBanners(cityBanners[city] || []);

            try {
                const response = await axios.get(`http://localhost:8000/api/search/?q=${city}`);
                setHotels(response.data);
            } catch (error) {
                console.error("Error fetching city data:", error);
            }
        };

        fetchCityData();
    }, [city]);

    return (
        <div>
            <BannerSlider banners={banners} />
            <CityCardsBar hotels={hotels} />
        </div>
    );
}
