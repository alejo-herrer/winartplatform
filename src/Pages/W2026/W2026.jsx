import { useState, useEffect } from 'react'
import { NavBar } from '../../components/NavBar/NavBar.jsx'
import { LoadingPage } from '../../components/LoadingPage/LoadingPage.jsx';
import { VideoCarrousel } from '../../components/VideoCarrousel.jsx'
import './W2026.css'

export function W2026() {

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
        <div className='wt-W2026'>
          <div className='wt-W2026-container'>
            <div className='wt-W2026-start'> 
              <h2>NUESTRA EDICIÓN 2026</h2>
              <VideoCarrousel></VideoCarrousel>
            </div>
          </div>
        </div>
    </section>
  )
}