import React,{Component} from 'react';
import './NavegacionAdmin.css';
import Inicio from '../inicio/Inicio'
import InicioAdmin from '../inicio/InicioAdmin'
import NavBar from '../navBar/Navegacion'
import BuzonAdmin from '../buzon/Buzon'
import ProductosAdmin  from '../productosAdmin/ProductosAdmin'
import SoporteAdmin from '../soporteAdmin/SoporteAdmin'
import ReactDOM from 'react-dom';
class NavegacionAdmin extends Component{
    componentDidMount(){
        var varRegistroAdmin = document.getElementById('navRegistro');
        varRegistroAdmin.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <NavBar />
                </React.StrictMode>,
                document.getElementById('navegacion')
            )
            ReactDOM.render(
                <React.StrictMode>
                    <Inicio />
                </React.StrictMode>,
                document.getElementById('root')
            )

        }
        var varInicioAdmin = document.getElementById('navInicioAdmin');
        varInicioAdmin.onclick = function () {

            ReactDOM.render(
                <React.StrictMode>
                    <InicioAdmin />
                </React.StrictMode>,
                document.getElementById('root')
            )

        }
        var varBuzonAdmin = document.getElementById('navBuzon');
        varBuzonAdmin.onclick = function () {

            ReactDOM.render(
                <React.StrictMode>
                    <BuzonAdmin />
                </React.StrictMode>,
                document.getElementById('root')
            )

        }
        var varProductoAdmin = document.getElementById('navProducto');
        varProductoAdmin.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <ProductosAdmin/>
                </React.StrictMode>,
                document.getElementById('root')
            )
        }
        var varSoporteAdmin = document.getElementById('navSoporte');
        varSoporteAdmin.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <SoporteAdmin/>
                </React.StrictMode>,
                document.getElementById('root')
            )
        }
    }
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <ul className="navElementos">
                        <li className="elementNav"><a id="navInicioAdmin" href="#">Inicio</a></li>
                        <li className="elementNav"><a id="navBuzon" href="#">Buzón</a></li>
                        <li className="elementNav"><a id="navProducto" href="#">Producto</a></li>
                        <li className="elementNav"><a id="navSoporte" href="#">Soporte</a></li>
                        <li className="elementNav navAcceder"><a href="#" id="navRegistro" className="material-icons">local_cafe</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavegacionAdmin;