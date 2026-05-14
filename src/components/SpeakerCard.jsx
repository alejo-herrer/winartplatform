import './Components.css'

export function SpeakerCard({fondoSpeaker, textoSpeaker, urlSpeaker}){
    return(
        <div className="wt-SpeakerCard">
            <div className="wt-SpeakerCard-Inner">
                <div className="wt-SpeakerCard-Front">
                    <img className="wt-SpeakerCard-Img" src={fondoSpeaker}/>
                </div>    
                <div className="wt-SpeakerCard-Back">
                     <p>{textoSpeaker}</p>
                     <a href={urlSpeaker} target="_blank">Click para conocer más</a>
                </div>  
            </div>
        </div>
    )
}