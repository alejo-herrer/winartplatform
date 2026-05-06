import { useState, useEffect } from 'react';
import { hoja1, hoja1_2, hoja2, hoja2_2, winartlogo, brillo, sol} from '../assets'
import './Home.css'


export function Home() {

    const [scrollY,setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const progress = Math.min(
            window.scrollY / (window.innerHeight * 2),
            1
            );

            setScrollY(progress); // 👈 aquí va

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);


    }, []);

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    return(
        <div className="wt-start">
            <div className="wt-sticky">
                <div className='wt-home'>
                    <div className='wt-home-hojas'>
                        <img    className='wt-home-hoja1'
                                src={hoja1}
                                style={{transform: `translateY(${scrollY * 400}px)`}}
                        />
                        <img    className='wt-home-hoja2'
                                src={hoja2}
                                style={{transform: `translateY(${scrollY * 600}px)`}}
                        />
                        <img    className='wt-home-hoja1_2'
                                src={hoja1_2}
                                style={{transform: `translateY(${scrollY * 400}px)`}}
                        />
                        <img    className='wt-home-hoja2_2'
                                src={hoja2_2}
                                style={{transform: `translateY(${scrollY * 600}px)`}}
                        />
                    </div>
                    <div className='wt-home-center'>
                        <img    className='wt-home-logo'
                                src={winartlogo}
                                style={{transform: `translateY(-${scrollY * 750}px)`}} />
                        <p>EL CONGRESO PARA TODOS</p>
                    </div>
                    <div className='wt-home-bg'>
                        <img className='wt-home-brillo' src={brillo}/>
                        <img className='wt-home-sol' src={sol}/> 
                    </div>
                </div>
            </div>
        </div>
    )

}
