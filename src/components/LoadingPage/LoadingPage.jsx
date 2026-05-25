import { motion } from "framer-motion";
import { winartlogo3 } from "../../assets";
import "./LoadingPage.css";

export function LoadingPage() {
    return (
        <div className="loading-page">

            <motion.div
                className="logo-container"
                initial={{ scale: 0.8 }}
                animate={{
                    scale: [0.8, 1, 0.8]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5
                }}
            >
                <img src={winartlogo3}/>
            </motion.div>

            <motion.p
                animate={{
                    opacity: [0.3, 1, 0.3]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5
                }}
            >
                Preparando el dermografo...
            </motion.p>

        </div>
    );
}