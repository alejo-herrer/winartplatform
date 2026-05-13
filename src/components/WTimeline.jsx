import { useIsMobile } from '../Hook/useIsMobile'
import { useEffect, useState } from "react"
import './Components.css'

export function WTimeline({type = 1, txtPosition = 0, children, urlImg}){

    const isMobile = useIsMobile()


    if(!isMobile){
        return(
        
            <div className='wt-Timeline'>
                <div className='wt-Timeline-txt'>
                    <div className='wt-Timeline-box'>
                        {
                            txtPosition === 0
                            ? children
                            :   <div>
                                    <img src={urlImg}></img>
                                </div>
                        }
                    </div>
                </div>
                <div className={`wt-Timeline${type}-line`}>
                    <div className={`wt-Timeline${type}-circle`}>
                    </div>
                </div>
                <div className='wt-Timeline-txt'>
                    <div className='wt-Timeline-box'>
                        {
                            txtPosition === 0
                            ?    <div>
                                    <img src={urlImg}></img>
                                </div>
                            :   children
                        }
                    </div>
                </div>
            </div>

        )
    } else {
        return(
        
            <div className='wt-Timeline'>
                <div className='wt-Timeline-txt'>
                    <div className='wt-Timeline-box'>
                        {children}
                    </div>
                </div>
                <div className='wt-Timeline-txt'>
                    <div className='wt-Timeline-box'>
                        <div>
                            <img src={urlImg}></img>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

