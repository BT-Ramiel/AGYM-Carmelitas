import React,{Component} from 'react';
import './Navegacion.css';

class Navegacion extends Component{

    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" id="carrito" className="material-icons navAcceder right iconoNav">shopping_cart</a>
                    <ul className="navElementos">
                        <li className="elementNav"><a id="navInicio" href="#">Inicio</a></li>
                        <li className="elementNav"><a id="navMenu" href="#">Menú</a></li>
                        <li className="elementNav"><a id="navQuienesSomos" href="#">¿Quienes somos?</a></li>
                        <li className="elementNav"><a id="navContactanos" href="#">Contactanos</a></li>
                        <li className="elementNav navAcceder"><a href="#" id="navRegistro">Acceder</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navegacion;