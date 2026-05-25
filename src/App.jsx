import { useState, useEffect } from 'react'
import {  Home  } from './Home/Home.jsx'
import {  About  } from './Pages/About/About.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { WLine } from './components/WLine';
import { Beneficios } from './Pages/Beneficios/Beneficios.jsx'
import { Program } from './Pages/Program/Program.jsx'
import { Spots } from './Pages/Spots/Spots.jsx'
import { LoadingPage } from './components/LoadingPage/LoadingPage.jsx';
import './App.css'


export function App() {

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
            <div className='wt-App'>
              <Home></Home>
              <WLine></WLine>
              <About></About>
              <WLine></WLine>
              <Beneficios></Beneficios>
              <Program></Program>
              <Spots></Spots>
            </div>
        </section>
        
  )

}
