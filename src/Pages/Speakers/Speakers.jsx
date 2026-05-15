import { NavBar } from '../../components/NavBar/NavBar.jsx'
import { useState, useEffect } from 'react'
import './Speakers.css'
import { SpeakerCarrousel } from '../../components/Carrousel/SpeakerCarrousel.jsx'


export function Speakers() {

  return(

    <section>
      <NavBar></NavBar>
      <div className='wt-Speakers'>
        <div className='wt-Speakers-container'>
          <div className='wt-Speakers-start'> 
            <SpeakerCarrousel></SpeakerCarrousel>
          </div>
        </div>
      </div>
    </section>
      
  )
}