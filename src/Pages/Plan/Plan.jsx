import { useState, useEffect } from 'react'
import { NavBar } from '../../components/NavBar/NavBar.jsx'
import { LoadingPage } from '../../components/LoadingPage/LoadingPage.jsx';
import './Plan.css'
import { WPlanes } from '../../components/Planes/WPlanes.jsx';


export function Plan() {

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
        <div className='wt-Plan'>
          <div className='wt-Plan-container'>
            <div className='wt-Plan-start'> 
              <h2>NUESTROS PLANES</h2>
              <WPlanes></WPlanes>
            </div>
          </div>
        </div>
    </section>
        
    )
}