import { NavBar } from '../../components/NavBar/NavBar.jsx'
import { useState, useEffect } from 'react'
import { SpeakerCardGallery } from '../../components/SpeakerCardGallery.jsx'
import './Speakers.css'


export function Speakers() {

  return(

    <section>
      <NavBar></NavBar>
      <div className='wt-Speakers'>
        <div className='wt-Speakers-container'>
          <div className='wt-Speakers-start'> 
            <SpeakerCardGallery></SpeakerCardGallery>
          </div>
        </div>
      </div>
    </section>
      
  )
}