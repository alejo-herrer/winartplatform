import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../../supabaseClient.js";
import { SpeakerCard } from "./SpeakerCard.jsx";
import { useIsMobile } from '../../Hook/useIsMobile'
import './Carrousel.css'

export function SpeakerCarrousel(){
    
    const[speaker, setSpeaker] =useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const isMobile = useIsMobile()
    

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

    const step = 1

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + step === speaker.length ? step : prevIndex + step
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - step < 0 ? speaker.length - step : prevIndex - step
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Evita errores mientras carga Supabase
    if (speaker.length === 0) {
        return <div>Cargando...</div>;
    }

    let visibleSpeakers = []
    
    if(!isMobile){

        visibleSpeakers = [
            speaker[currentIndex],
            speaker[(currentIndex + 1) % speaker.length],
            speaker[(currentIndex + 2) % speaker.length],
        ];
    } else {
        visibleSpeakers = [
            speaker[currentIndex]];
    }

    return (
        <section className="wt-Carousel">
            <div className="carousel">

                <div className="slide_direction">

                    <div className="left" onClick={handlePrevious}>
                        ←
                    </div>

                </div>

                {visibleSpeakers.map((item, index) => (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                        <SpeakerCard
                            key={index}
                            fondoSpeaker={item.fondospeaker}
                            urlSpeaker={item.urlspeaker}
                            textoSpeaker={item.textospeaker}
                        />
                        </motion.div>
                    </AnimatePresence>
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