/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/BannerSlider.css";

export function BannerSlider({ banners }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [banners]);

    return (
        <div className="banner-slider">
            <div
                className="banner-container"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {banners.map((banner, index) => (
                    <div
                        className="banner-slide"
                        key={index}
                        style={{
                            backgroundImage: `url(${banner.image})`,
                        }}
                    >
                        <div className="banner-content">
                            <h1>{banner.title}</h1>
                            <p>{banner.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
