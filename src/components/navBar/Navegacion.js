import React,{Component} from 'react';
import './Navegacion.css';

class Navegacion extends Component{
    render() {
        return(
            <nav>
                <div className="nav-wrapper navegacion">
                    <a href="#" className="brand-logo right">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a id="navInicio" href="#">Inicio</a></li>
                        <li><a id="navMenu" href="#">Menú</a></li>
                        <li><a id="navQuienesSomos" href="#">¿Quienes somos?</a></li>
                        <li><a id="navContactanos" href="#">Contactanos</a></li>
                        <li><a href="#" id="navRegistro">Acceder</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navegacion;