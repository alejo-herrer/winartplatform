import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient.js";
import { Link } from 'react-router-dom'
import "./WPlanes.css"
import { WButton } from "../WButton.jsx";


export function WPlanes(){

    const [plan, setPlan ] = useState([])

    useEffect(() => {
        async function fetchData(){
            const {data, error} = await supabase
                .from('planes')
                .select('*')
                .order('id', { ascending: true })
            if (error){
                console.log(error)
            } else {
                setPlan(data || [])
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        if (window.paypal && plan.length > 0) {

            plan.forEach(p => {
                window.paypal.HostedButtons({
                    hostedButtonId: p.botonplan,
                }).render(`#paypal-container-${p.botonplan}`);
            });

        }
    }, [plan]);

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
                        <div className='wt-paypal-box'>
                            <div className='wt-paypal-button' id={`paypal-container-${p.botonplan}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </section>
    )
}