import { useState, useEffect } from 'react'
import { NavBar } from '../../components/NavBar/NavBar.jsx'
import './Speakers.css'
import { SpeakerCarrousel } from '../../components/Carrousel/SpeakerCarrousel.jsx'
import { LoadingPage } from '../../components/LoadingPage/LoadingPage.jsx';


export function Speakers() {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 segundos de carga

        return () => clearTimeout(timer);

    }, []);

    if (loading) {
        return <LoadingPage />;
    }

  return(

    <section>
      <NavBar></NavBar>
      <div className='wt-Speakers'>
        <div className='wt-Speakers-container'>
          <div className='wt-Speakers-start'> 
            <h2>NUESTROS SPEAKERS</h2>
            <SpeakerCarrousel></SpeakerCarrousel>
          </div>
        </div>
      </div>
    </section>
      
  )
}