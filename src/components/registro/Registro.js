import React,{Component} from 'react';
import './Registro.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Modal from './RecuperarPass'
import NuevoCliente from "./NuevoCliente";
import Menu from '../menu/Menu'
import ReactDOM from 'react-dom';
class Registro extends  Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
        var btnNuevoCliente= document.getElementById('btnNuevoCliente');
        btnNuevoCliente.onclick = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <NuevoCliente />
                </React.StrictMode>,
                document.getElementById('root')
            )
        };
        var varIniciarSesion = document.getElementById('iniciarSesion');
        varIniciarSesion.onclick = function () {
            ReactDOM.render(
                <React.StrictMode>
                    <Menu />
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
            <div className ="col s12 m6">
                    
                    <div className="cuadradoBlanco">
                        <h5>¡Bienvenido!</h5>
                        <h6>Nuevo Cliente: </h6>
                        <p>
                        Al crear una cuenta en nuestra página web podrás comprar más rápido, guardar tus preferencias y mucho más.
                        <em>¡Registrate y animate!</em> 
                        </p>
                        <a id="btnNuevoCliente" className="btn-floating btn-large green pulse"><i className="material-icons">person_add</i></a>
                    </div>
                </div>
                <div className ="col s12 m6">
                <div className="cuadradoBlanco">
                    <h6>Cliente ya registrado:</h6>
                    <form className="container" >
                     <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
           
                    <div className="row">
                        <div className="col s12 m6">
                            <label>
                                <input type="checkbox" />
                                <span>Recordar</span>
                            </label>
                        </div>
                        <div className="col s12 m6">
                            <Modal/>
                        </div>
                        <div className="input-field col s12">
                        <button className="btn waves-effect waves-light pulse" type="submit" name="action" id="iniciarSesion">Iniciar Sesión<i className="material-icons right">send</i>
                        </button>
                        </div>
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                            </div>
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