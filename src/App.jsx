import { useState, useEffect } from 'react'
import {  Home  } from './Home/Home.jsx'
import {  About  } from './Pages/About/About.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { WLine } from './components/WLine';
import { Beneficios } from './Pages/Beneficios/Beneficios.jsx'
import { Program } from './Pages/Program/Program.jsx'
import { Spots } from './Pages/Spots/Spots.jsx'
import './App.css'

function Loader() {
    return <div className="loader">Loading...</div>
}

export function App() {

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
