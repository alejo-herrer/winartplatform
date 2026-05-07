import { useState, useEffect } from 'react';
import { useScrollProgress } from '../Hook/useScroll';
import { hoja1, hoja1_2, hoja2, hoja2_2, winartlogo, brillo, sol, videopresentacion} from '../assets'
import './Home.css'


export function Home() {

    window.addEventListener("scroll",console.log(1-useScrollProgress(1)))
    const scrollY = 1-useScrollProgress(1)

    return(
        <div className="wt-start">
            <div className="wt-sticky" style={{pointerEvents: scrollY <= 0.02 ? "none" : "auto"}}>
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
                <div className='wt-start-enjoy'>
                    <div className='wt-start-video'>
                        <video src={videopresentacion} autoPlay muted controls />
                    </div>
                </div>
            </div>
        </div>
    )

}
