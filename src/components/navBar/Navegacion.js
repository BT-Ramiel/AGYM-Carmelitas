import React,{Component} from 'react';
import './Navegacion.css';
import Inicio from "../inicio/Inicio";
import Menu from "../menu/Menu";
import QuienesSomos from "../quienes-somos/QuienesSomos"
import Contactanos from "../contactanos/Contactanos";
import Registro from "../registro/Registro";
import Carrito from "../carrito/Carrito";
import ReactDOM from 'react-dom';
class Navegacion extends Component{
    componentDidMount (){
        var varInicio = document.getElementById("navInicio");
        var varMenu = document.getElementById("navMenu");
        var varQuienesSomos = document.getElementById("navQuienesSomos");
        var varContactanos = document.getElementById("navContactanos");
        var varRegistro = document.getElementById("navRegistro");
        var varCarrito = document.getElementById("carrito");
        varInicio.onclick = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <Inicio />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };

        varMenu.onclick = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <Menu />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };
        varQuienesSomos.onclick  = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <QuienesSomos />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };
        varContactanos.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <Contactanos />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };
        varRegistro.onclick = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <Registro />
                </React.StrictMode>,
                document.getElementById('root')
            );
        }
        varCarrito.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <Carrito/>
                </React.StrictMode>,
                document.getElementById('root')
            );
        }
    }
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