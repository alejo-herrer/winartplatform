import { limaplayas } from "../../assets";
import "./About.css";

export function About() {
  return (
    <div className="wt-About" id="About">
      <div>
        <div>
          <h2>¿QUE ES WINART?</h2>
          <p>
            Durante tres días inolvidables en la ciudad de Lima, WINART reunirá
            a profesionales del PMU y la micropigmentación en una experiencia
            única de aprendizaje, networking, inspiración y crecimiento
            profesional, con shows en vivo, innovación y conexión real con la
            industria.
          </p>
        </div>
        <div>
          <img src={limaplayas}></img>
        </div>
      </div>
    </div>
  );
}
