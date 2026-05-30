import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient.js";
import "./WPlanes.css"


export function WPlanes(){

    const [plan, setPlan ] = useState([])

    useEffect(() => {
        async function fetchData(){
            const {data, error} = await supabase
                .from('planes')
                .select('*')
            if (error){
                console.log(error)
            } else {
                setPlan(data || [])
            }
        }
        fetchData()
    },[])

    return(
        <section className='wt-Plan-gallery'>
        {plan.map(p => (   
            <div className='wt-Plan-box'>
                <div id={p.id} className='wt-Plan-chart'>
                    <div className='wt-Plan-Image'>
                        <img src={p.url}></img>
                    </div>
                    <div className='wt-Plan-Desc'>
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p>
                    </div>
                </div>
            </div>
        ))}
        </section>
    )
}