import { supabase } from './supabaseClient.js'
import { useState, useEffect } from 'react'
import {  Home  } from './Home/Home.jsx'
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
        <Home></Home>
  )

}
