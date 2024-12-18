/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/BannerSlider.css";

export function BannerSlider({ banners }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="banner-slider">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`banner-slide ${index === currentIndex ? "active" : ""}`}
                    style={{
                        backgroundImage: `url(${banner.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: index === currentIndex ? "block" : "none",
                    }}
                >
                    <div className="banner-content">
                        <h1>{banner.title}</h1>
                        <p>{banner.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
