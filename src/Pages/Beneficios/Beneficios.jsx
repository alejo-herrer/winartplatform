import { beneficios } from "../../assets";
import { WItem } from '../../components/WItem';
import "./Beneficios.css";

export function Beneficios() {
  return (
    <div className="wt-Beneficios">
        <div className='wt-Beneficios-container'>
            <div className='wt-Beneficios-lista'>
                <h2>LOS PARTICIPANTES <span>VIVIRAN</span></h2>
                <WItem>Acceso a ponencias de Speakers.</WItem>
                <WItem>Acceso a la expoferia con 20 marcas</WItem>
                <WItem>Participación en rifas y sorteos.</WItem>
                <WItem>La oportunidad de competir por $22,500</WItem>
                <WItem>Experiencias y fiestas increibles.</WItem>
                <WItem>Realizar networking.</WItem>
                <WItem>Acceso a la presentación de demospeakers</WItem>
            </div>
            <div className='wt-Beneficios-img'>
                <img src={beneficios}></img>
            </div>
        </div>
    </div>
  );
}
