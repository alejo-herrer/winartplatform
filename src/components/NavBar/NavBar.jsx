import { useState} from 'react'
import { Link } from 'react-router-dom'
import { winartlogo2 } from '../../assets' 
import { useIsMobile } from '../../Hook/useIsMobile'
import './NavBar.css'

export function NavBar(){

    const [on,setOn] = useState(false)
    const isMobile = useIsMobile()

    
    if(!isMobile){
        return(

            <div className='wt-NavBar'>
                <img className='wt-NavBar-Logo' src={winartlogo2} />
                <div className='wt-NavBar-menu'>
                    <ul>
                        <li><Link to='/'>INICIO</Link></li>
                        <li><Link to='/Speakers'>NUESTROS SPEAKERS</Link></li>
                        <li><Link to='/Plan'>NUESTROS PLANES</Link></li>
                    </ul>
                </div>
            </div>

        )
    } else {
        return(
            <div>
                <div className='wt-NavBar'>
                    <img className='wt-NavBar-Logo' src={winartlogo2}/>
                    <div className='wt-NavBar-Burguer' onClick={() => {setOn(prev => !prev); console.log(on) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>  
                </div>
                 <div className={`wt-NavBar-menu ${on ? "open" : ""}`}>
                            <ul>
                                <li><Link to='/'>INICIO</Link></li>
                                <li><Link to='/Speakers'>NUESTROS SPEAKERS</Link></li>
                                <li><Link to='/Plan'>NUESTROS PLANES</Link></li>
                            </ul>
                </div>
            </div>

        )
    }
}