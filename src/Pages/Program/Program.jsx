import { sunsetyate } from "../../assets";
import { WTimeline } from '../../components/WTimeline';
import "./Program.css";

export function Program() {
  return (
    <div className="wt-Program">
        <div className="wt-Program-bg"></div>
        <div className="wt-Program-container">
            <h2>ITINERARIO DEL EVENTO</h2>
            <div className="wt-Program-timeline">
                <WTimeline></WTimeline>
                <WTimeline></WTimeline>
                <WTimeline></WTimeline>
            </div>
        </div>
    </div>
  );
}
