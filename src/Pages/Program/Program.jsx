import { sunsetyate } from "../../assets";
import { WTimeline } from '../../components/WTimeline';
import { limaplayas, program1, program2, program3, program4, program5} from "../../assets";
import "./Program.css";

export function Program() {
  return (
    <div className="wt-Program">
        <div className="wt-Program-bg"></div>
        <div className="wt-Program-container">
            <h2>ITINERARIO DEL EVENTO</h2>
            <div className="wt-Program-timeline">
                <WTimeline type={0} txtPosition={0} urlImg={program1}>
                  <span>Día 0</span>
                  <h3>FEBRERO 17, 2026</h3>
                  <p> Transporte al aeropuerto durante todo el día<br/>
                      Recepción nocturna y actividad de networking<br/>
                      Fiesta de bienvenida</p>
                </WTimeline>
                <WTimeline txtPosition={1} urlImg={program2}>
                  <span>Día 1</span>
                  <h3>FEBRERO 18, 2026</h3>
                  <span>EMPIEZA 07:00 AM</span>
                  <p> Registro de la competencia<br/>
                      Sesiones de competencias por categorias<br/>
                      Demostraciones en vivo de Demospeakers<br/>
                      Expoferia con más de 20 marcas<br/>
                      Fiesta de bienvenida
                  </p>
                </WTimeline>
                <WTimeline txtPosition={0} urlImg={program3}>
                  <span>Día 2</span>
                  <h3>FEBRERO 19, 2026</h3>
                  <span>EMPIEZA 08:00 AM</span>
                  <p> Presentación de nuestros Champion Speaker<br/>
                      Presentacion de danzas típicas<br/>
                      Ponencias de Speakers Internacionales<br/>
                      Demostraciones en vivo de Demospeakers<br/>
                      Presentación de nuestros sponsors<br/>
                      Expoferia con más de 20 marcas
                  </p>
                </WTimeline>
                <WTimeline txtPosition={1} urlImg={program4}>
                  <span>Día 3</span>
                  <h3>FEBRERO 20, 2026</h3>
                  <span>EMPIEZA 08:00 AM</span>
                  <p> Presentación de nuestros Champion Speaker<br/>
                      Presentacion de danzas típicas<br/>
                      Ponencias de Speakers Internacionales<br/>
                      Demostraciones en vivo de Demospeakers<br/>
                      Presentación de nuestros sponsors<br/>
                      Expoferia con más de 20 marcas<br/>
                  </p>
                  <span><strong>10:30 PM - CENA DE GALA</strong></span>
                </WTimeline>
                <WTimeline type={2} txtPosition={0} urlImg={program5}>
                  <span>Día 4</span>
                  <h3>FEBRERO 21, 2026</h3>
                </WTimeline>
            </div>
        </div>
    </div>
  );
}
