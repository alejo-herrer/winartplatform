import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../../supabaseClient.js";
import { SpeakerCard } from "./SpeakerCard.jsx";
import './Carrousel.css'

export function SpeakerCarrousel(){
    
    const[speaker, setSpeaker] =useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() =>{
        async function fetchData(){
            const {data , error} = await supabase
                .from('speakers')
                .select('*')
            if(error){
                console.log(error)
            } else {
                setSpeaker(data || [])
            }
        }
        fetchData()
    }, [])
    
    useEffect(() => {

    const handleKeyDown = (e) => {

            if (e.key === "ArrowRight") {
                handleNext()
            }

            if (e.key === "ArrowLeft") {
                handlePrevious()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }

    }, [speaker])

     const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === speaker.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? speaker.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Evita errores mientras carga Supabase
    if (speaker.length === 0) {
        return <div>Cargando...</div>;
    }

    const visibleSpeakers = [
        speaker[currentIndex],
        speaker[(currentIndex + 1) % speaker.length],
        speaker[(currentIndex + 2) % speaker.length],
    ];

    

    return (
        <section className="wt-Carousel">
            <div className="carousel">

                <div className="slide_direction">

                    <div className="left" onClick={handlePrevious}>
                        ←
                    </div>

                </div>

                {visibleSpeakers.map((item, index) => (
                    <SpeakerCard
                        key={index}
                        fondoSpeaker={item.fondospeaker}
                        urlSpeaker={item.urlspeaker}
                        textoSpeaker={item.textospeaker}
                    />
                ))}

                <div className="slide_direction">

                    <div className="right" onClick={handleNext}>
                        →
                    </div>

                </div>

            </div>

            <div className="indicator">
            
                {speaker.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    >
                    </div>
                ))}
    
            </div>
        </section>
    );

}