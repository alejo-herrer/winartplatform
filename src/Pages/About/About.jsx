import { limaplayas } from "../../assets";
import "./About.css";

export function About() {
  return (
    <div className="wt-About" id="About">
      <div className='wt-About-container'>
        <div className='wt-About-txt'>
          <h2>¿QUE ES <span>WINART?</span></h2>
          <p>
            <span style={{textDecoration: 'underline'}}>
              WINART no es solo un evento — es una forma completamente nueva de conectar, crecer y vivir la experiencia del PMU juntos.
            </span>
            <br/>
            <br/>
            Durante tres días inolvidables en la ciudad de Lima, WINART reunirá
            a profesionales del PMU y la micropigmentación en una experiencia
            única de aprendizaje, networking, inspiración y crecimiento
            profesional, con shows en vivo, innovación y conexión real con la
            industria.
          </p>
        </div>
        <div className='wt-About-img'>
          <img src={limaplayas}></img>
        </div>
      </div>
    </div>
  );
}
