import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            image: "https://peru.info/archivos/publicacion/66-imagen-1319432912018.jpg",
            title: "Descubre Paracas",
            description: "Sol, playa y tranquilidad.",
        },
        {
            image: "https://www.deaventura.pe/aplication/webroot/imgs/destinos/big_1469027620reservanacionaldeparacas.jpg",
            title: "Vive Paracas",
            description: "La mejor experiencia costera.",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },
    ],
    cuzco: [
        {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/ba/cusco.jpg?w=1400&h=1400&s=1",
            title: "Explora Cuzco",
            description: "Historia y cultura en el corazón de los Andes.",
        },
        {
            image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/66000/66587-Cusco.jpg",
            title: "Vive Cuzco",
            description: "Descubre la magia del Valle Sagrado.",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },
    ],
    madrid: [
        {
            image: "https://content.r9cdn.net/rimg/dimg/5f/38/353ec907-ap-MAD-551b0685.jpg?width=1366&height=768&xhint=826&yhint=409&crop=true",
            title: "Explora Madrid",
            description: "Historia y cultura rica de nuestros consquistadores.",
        },
        {
            image: "https://c4.wallpaperflare.com/wallpaper/431/430/493/tourism-spain-travel-madrid-wallpaper-preview.jpg",
            title: "Vive Madrid",
            description: "Descubre la magia de la capital de España.",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },

    ],
    cartagena: [
        {
            image: "https://static-uat.cambiocolombia.com/s3fs-public/2023-01/cartagena_torre_reloj.jpg",
            title: "Explora Cartagena",
            description: "Cartagena es una ciudad histórica y vibrante de Colombia.",
        },
        {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/28/59/f2/caption.jpg?w=1200&h=-1&s=1",
            title: "Vive Cartagena",
            description: "Cartagena es una joya colonial en la costa caribeña de Colombia",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },

    ],
    arequipa: [
        {
            image: "https://www.travelandes.com/img/GalleryContent/112604/Arequipa1.jpg",
            title: "Explora Arequipa",
            description: "Arequipa es una ciudad peruana rodeada de volcanes majestuosos y adobo.",
        },
        {
            image: "https://skyperu.com/wp-content/uploads/2021/10/1-12.jpg",
            title: "Vive Arequipa",
            description: "Arequipa es una ciudad peruana encantadora, reconocida por su sillar volcánico.",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },


    ],
    parís: [
        {
            image: "https://turismo.org/wp-content/uploads/2015/05/Torre-Eiffel-vista-panoramica.jpg",
            title: "Explora Paris",
            description: "París la Ciudad de la Luz es un ícono mundial de arte, moda y cultura",
        },
        {
            image: "https://img.rtve.es/imagenes/arco-del-triunfo/1641977964278.jpg",
            title: "Vive Paris",
            description: "París es una ciudad encantadora y cosmopolita, conocida por su arquitectura histórica",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },


    ],
    piura: [
        {
            image: "https://viajerosocultos.com/wp-content/uploads/2023/01/4189884473_82cf4e9267_o.jpg",
            title: "Explora Piura",
            description: "Piura es una ciudad cálida del norte del Perú, conocida por sus playas, su deliciosa gastronomía y su rica tradición cultural y artesanal.",
        },
        {
            image: "https://ferianativa.com/img/cms/blog/ciudades/lugares-piura/vista-valle-chira-sullana.jpg",
            title: "Vive Piura",
            description: "Piura, en el norte del Perú, es una ciudad vibrante",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
        },

    ],
    RíodeJaneiro: [
        {
            image: "",
            title: "Explora Rio de janeiro",
            description: "Río de Janeiro, la Cidade Maravilhosa, es famosa por sus icónicas playas, el Cristo Redentor y su vibrante espíritu cultural lleno de música y samba.",
        },
        {
            image: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1705009752/lvazhvdzath12roffk3n.png",
            title: "Vive Rio de janeiro",
            description: "Río de Janeiro es una ciudad brasileña deslumbrante, conocida por su paisaje entre montañas y mar, su carnaval mundialmente famoso y su energía contagiosa.",
        },
        {
            image: "https://www.atrapalo.com/hoteles/picture/l/4068/5/1/305425076.jpg",
            title: "Vive una Experiencia maravillosa",
            description: "El mejor servicio de hoteleria.",
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
