import { winartlogo2 } from '../../assets' 
import './NavBar.css'

export function NavBar(){

    return(

        <div className='wt-NavBar'>
            <img className='wt-NavBar-Logo' src={winartlogo2}/>
            <div className='wt-NavBar-'>
                <ul>
                    <li><a>INICIO</a></li>
                    <li><a>NUESTROS SPEAKERS</a></li>
                    <li><a>NUESTROS PLANES</a></li>
                    <li><a>ENTRADAS</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
        </div>

    )
}