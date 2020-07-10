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
        varInicio.onclick = irAInicio;
        varMenu.onclick =irAMenu;
        varQuienesSomos.onclick  = irAQuienesSomos;
        varContactanos.onclick = irAContactanos;
        varRegistro.onclick = irARegistro;
        varCarrito.onclick = irACarrito;
        var varInicioM = document.getElementById("navInicioM");
        var varMenuM = document.getElementById("navMenuM");
        var varQuienesSomosM = document.getElementById("navQuienesSomosM");
        var varContactanosM = document.getElementById("navContactanosM");
        var varRegistroM = document.getElementById("navRegistroM");
        var varCarritoM = document.getElementById("carritoM");
        varInicioM.onclick = irAInicio;
        varMenuM.onclick =irAMenu;
        varQuienesSomosM.onclick  = irAQuienesSomos;
        varContactanosM.onclick = irAContactanos;
        varRegistroM.onclick = irARegistro;
        varCarritoM.onclick = irACarrito;
        function irAInicio(){
            ReactDOM.render(
                <React.StrictMode>
                    <Inicio />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };

        
        function irAMenu(){
            ReactDOM.render(
                <React.StrictMode>
                    <Menu />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };
        
        function irAQuienesSomos(){
            ReactDOM.render(
                <React.StrictMode>
                    <QuienesSomos />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };
        
        function irAContactanos() {
            ReactDOM.render(
                <React.StrictMode>
                    <Contactanos />
                </React.StrictMode>,
                document.getElementById('root')
            );
        };
        
        function irARegistro(){
            ReactDOM.render(
                <React.StrictMode>
                    <Registro />
                </React.StrictMode>,
                document.getElementById('root')
            );
        }
        
        function irACarrito() {
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
                <div className="nav-wrapper  show-on-large	hide-on-med-and-down">
                    <a href="#" id="carrito" className="material-icons navAcceder right iconoNav">shopping_cart</a>
                    <ul className="navElementos">
                        <li className="elementNav"><a id="navInicio" href="#">Inicio</a></li>
                        <li className="elementNav"><a id="navMenu" href="#">Menú</a></li>
                        <li className="elementNav"><a id="navQuienesSomos" href="#">¿Quiénes somos?</a></li>
                        <li className="elementNav"><a id="navContactanos" href="#">Contáctanos</a></li>
                        <li className="elementNav navAcceder"><a href="#" id="navRegistro">Acceder</a></li>
                    </ul>
                </div>
                <div className="nav-wrapper show-on-medium-and-down hide-on-large-only">
                    <a href="#" id="carritoM" className="material-icons navAcceder right iconoNav">shopping_cart</a>
                    <ul className="navElementos">
                        <li className="elementNav"><a id="navInicioM" class="material-icons" href="#">local_cafe</a></li>
                        <li className="elementNav"><a id="navMenuM" class="material-icons" href="#">dns</a></li>
                        <li className="elementNav"><a id="navQuienesSomosM" class="material-icons" href="#">pan_tool</a></li>
                        <li className="elementNav"><a id="navContactanosM" class="material-icons" href="#">local_phone</a></li>
                        <li className="elementNav navAcceder"><a href="#" class="material-icons" id="navRegistroM">person</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navegacion;