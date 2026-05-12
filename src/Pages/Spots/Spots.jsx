import { WButton } from '../../components/WButton';
import "./Spots.css"

export function Spots(){

    return(

        <div className="wt-Spots">
            <div className="wt-Spots-container">
                <div className="wt-Spots-title">
                    <span>⚠️</span>
                    <span>🔥 CUPOS 🔥</span>
                    <span>MUY LIMITADOS</span>
                </div>
                <p>Reserva tu lugar ahora antes que se agoten</p>
            </div>
            <br/>
            <div>
                <WButton>
                        Vive la experiencia WINART
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                </WButton>
                <p>18 - 20 DE FEBRERO DEL 2027 | <strong>LIMA, PERÚ</strong></p>
            </div>
        </div>

    )
} 