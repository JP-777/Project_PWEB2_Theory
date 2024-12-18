import "../styles/MapPage.css";
import { BannerSlider } from "./BannerSlider";

export function MapPage() {
    const discountBanners = [
        { image: "https://blog.acsa.sv/hubfs/Viaje%20en%20familia.jpg", title: "¡20% de descuento en hoteles de playa!" },
        { image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/SWPEBWQOEFE45JJJHBXPCTHWWU.jpg", title: "¡30% de descuento en Cuzco!" },
        { image: "https://royaldreamsviajes.com/wp-content/uploads/2024/08/paquetes-anio-nuevo-buenos-aires.jpg", title: "¡50% de descuento en Paracas por tiempo limitado!" },
    ];

    return (
        <div className="map-page">
            <h1 className="map-title">Nos encontramos en todo el Perú</h1>
            
            <div className="discount-banners">
                <BannerSlider banners={discountBanners} />
            </div>

            <div className="map-container">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13115.532945302943!2d-77.06241668251584!3d-12.046373652791576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c91e3e08dbcb%3A0x2084ec9b91080a55!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses-419!2s!4v1683834567891!5m2!1ses-419!2s"
                    width="100%"
                    height="400px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
