import { useScrollProgress } from '../Hook/useScroll';
import { WButton } from '../components/WButton'
import { hoja1, hoja1_2, hoja2, hoja2_2, winartlogo, brillo, sol, videopresentacion} from '../assets'
import './Home.css'


export function Home() {


    const scrollY = 1-useScrollProgress(1)

    return(
        <div className="wt-start"  id='Inicio'>
            <div className="wt-sticky" style={{pointerEvents: scrollY <= 0.3 ? "none" : "auto"}}>
                <div className='wt-home' style={{opacity: scrollY }}>
                    <div className='wt-home-hojas'>
                        <img    className='wt-home-hoja1'
                                src={hoja1}
                        />
                        <img    className='wt-home-hoja2'
                                src={hoja2}
                        />
                        <img    className='wt-home-hoja1_2'
                                src={hoja1_2}
                        />
                        <img    className='wt-home-hoja2_2'
                                src={hoja2_2}
                        />
                    </div>
                    <div className='wt-home-center'>
                        <img    className='wt-home-logo'
                                src={winartlogo} />
                        <p>EL CONGRESO PARA TODOS</p>
                    </div>
                    <div className='wt-home-bg'>
                        <img className='wt-home-brillo' src={brillo}/>
                        <img className='wt-home-sol' src={sol}/> 
                    </div>
                </div>
            </div>
            <div className='wt-start-view2'>
                <div className='wt-start-welcome'>
                    <p>BIENVENID<span>O</span></p>
                    <h1>El evento internacional líder para profesionales de PMU y micropigmentación</h1>
                </div>
                <div className='wt-start-enjoy'>
                    <div className='wt-start-video'>
                        <video src={videopresentacion} muted controls />
                    </div>
                </div>
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
