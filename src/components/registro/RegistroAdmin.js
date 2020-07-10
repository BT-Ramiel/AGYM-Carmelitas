import React,{Component} from 'react';
import './Registro.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import InicioAdmin from '../inicio/InicioAdmin'
import Menu from '../menu/Menu'
import ReactDOM from 'react-dom';

class Registro extends  Component{
    componentDidMount(){
        var varIniciarAdmin = document.getElementById("iniciarSesionAdmin");
        varIniciarAdmin.onclick  = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <InicioAdmin />
                </React.StrictMode>,
                document.getElementById('root')
            )
        }
    }
    render() {
        const altura = window.innerHeight - 64;
        return(
            // fondo declarado en inicio.css
            <div className="fondoGG" style={{height:altura +'px'}}>
            <div className="container">
            <div className="row">
                <div className ="col s12">
                <div className="cuadradoBlanco">
                    <h5>Iniciar Sesión como Administrador:</h5>
                    <form className="container" >
                     <div className="row">
                        <div className="input-field col s12">
                        <input id="text" type="text" className="validate"/>
                        <label htmlFor="text">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Contraseña </label>
                        </div>
                    </div>
           
                    <div className="row">
                        <div className="col s12 m6">
                            <label>
                                <input type="checkbox" />
                                <span>Recordar</span>
                            </label>
                        </div>
                        <div className="input-field col s12 m6">
                        <button className="btn waves-effect waves-light pulse" type="submit" name="action" id="iniciarSesionAdmin">Iniciar Sesión<i className="material-icons right">send</i>
                        </button>
                        </div>
                        
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    };
}
export default Registro;