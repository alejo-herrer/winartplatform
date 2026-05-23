import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Components.css";

export function ImageCarousel() {

    const images = [
        winart1,
        winart2,
        winart3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );
    };

    return (
        <section className="carousel">

            <div className="slide_direction">

                    <div className="left" onClick={handlePrevious}>
                        ←
                    </div>

                </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <video
                        src={images[currentIndex]}
                        alt={`imagen-${currentIndex}`}
                        className="carousel-image"
                         muted controls a
                    />
                </motion.div>
            </AnimatePresence>

            <div className="slide_direction">

                <div className="right" onClick={handleNext}>
                    →
                </div>

            </div>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${
                            currentIndex === index
                                ? "active"
                                : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

        </section>
    );
}