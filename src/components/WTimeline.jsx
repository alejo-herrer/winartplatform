import './Components.css'

export function WTimeline({type = 1, txtPosition = 0, children, urlImg}){

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

}