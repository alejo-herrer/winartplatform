import { motion } from "framer-motion";
import './Components.css'

export function LoadingPage() {

    return (
        <div className="loading-container">

            <motion.div
                className="spinner"
                animate={{ rotate:360 }}
                transition={{
                    repeat:Infinity,
                    duration:1,
                    ease:"linear"
                }}
            />

            <motion.h2
                className="loading"
                animate={{ opacity:[0.5,1,0.5] }}
                transition={{
                    repeat:Infinity,
                    duration:1.5
                }}
            >
                Cargando...
            </motion.h2>

        </div>
    );
}