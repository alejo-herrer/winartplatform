import { supabase } from "../supabaseClient.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Components.css";

export function VideoCarrousel() {

    const[videos, setVideos] =useState([])

    useEffect(() =>{
        async function fetchData(){
            const {data , error} = await supabase
                .from('videos')
                .select('*')
            if(error){
                console.log(error)
            } else {
                setVideos(data || [])
            }
        }
        fetchData()
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === videos.length - 1
                ? 0
                : prev + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? videos.length - 1
                : prev - 1
        );
    };

    return (
        <section className="wt-Carousel2026">
            <div className="carousel">

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
                    <div className="contentContainer">
                        <video
                            src={videos[currentIndex]?.urlvideo}
                            alt={`imagen-${currentIndex}`}
                            className="carousel-image"
                            muted controls
                        />
                        <div className="contentDesc">
                            <div className="contentDescHeader">
                                <strong>{videos[currentIndex]?.titulo_video}</strong>
                            </div>
                            <div className="contentDescBody">
                                {videos[currentIndex]?.desc_video}
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </AnimatePresence>

                <div className="slide_direction">

                    <div className="right" onClick={handleNext}>
                        →
                    </div>

                </div>
            </div>
            <div className="dots">
                {videos.map((_, index) => (
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