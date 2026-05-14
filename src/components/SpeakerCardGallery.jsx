import { useState, useEffect, useRef  } from "react";
import { SpeakerCard } from './SpeakerCard.jsx'
import { supabase } from "../supabaseClient.js";
import './Components.css'


export function SpeakerCardGallery(){
    
    const[speaker, setSpeaker] =useState([])
    const [index, setIndex] = useState(0)

    useEffect(() =>{
        async function fetchData(){
            const {data , error} = await supabase
                .from('speakers')
                .select('*')
    
            if(error){
                console.log(error)
            } else {
                setSpeaker(data || [])
            }
        }
        fetchData()
    },[])

    return(
        <div className='wt-SpeakerCard-Container'>
            {speaker.map((item) =>
                <SpeakerCard    id={item.id}
                                fondoSpeaker={item.fondospeaker} 
                                urlSpeaker= {item.urlspeaker}
                                textoSpeaker={item.textospeaker}
                />
            )}
        </div>
    )
}

//Maneras de recorrer mi speaker y leer sus elementos
/* speaker.forEach(item=>{console.log(item.textospeaker)}) */
/* speaker.map((item)=>(console.log(item.textospeaker))) */