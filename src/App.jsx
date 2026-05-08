import { supabase } from './supabaseClient.js'
import { useState, useEffect } from 'react'
import {  Home  } from './Home/Home.jsx'
import {  About  } from './Pages/About/About.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { WLine } from './components/WLine';
import './App.css'

export function App() {

  const [speaker,setSpeaker] = useState([])

  useEffect(() => {

    async function fetchData() {
      const {data,error} = await supabase
        .from('speakers')
        .select('*')

      if(error) {
        console.log('Error:', error)
      } else {
        setSpeaker(data)
      }
    }

    fetchData()


  }, []);

  speaker.map((item)=>{console.log(item.textospeaker)})

  return(
        <section>
            <NavBar></NavBar>
            <div className='wt-App'>
              <Home></Home>
              <WLine></WLine>
              <About></About>
            </div>
        </section>
        
  )

}
