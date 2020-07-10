import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Registro from './Registro'
import ReactDOM from 'react-dom';
class NuevoCliente extends Component{
    componentDidMount(){

        var btnRegistrarCliente= document.getElementById('registrarCliente');
        btnRegistrarCliente.onclick = function(){
            ReactDOM.render(
                <React.StrictMode>
                    <Registro />
                </React.StrictMode>,
                document.getElementById('root')
            )
        };
    }

    render(){
        const altura = window.innerHeight - 64;
        return(
            <div className="fondoGG" style={{height:altura +'px'}}>
            <div className="container">
                <div className="cuadradoBlanco">
                <div className="row">
                    <div className="col s12"><h5>Registro para nuevo cliente</h5></div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="nombre" type="text" class="validate"/>
                    <label htmlFor="nombre">Nombre Completo</label>
                    </div>
                    </div>
                <div className="row">    
                    <div class="input-field col s12 m4">
                    <input id="fechaNac" type="date" class="validate"/>
                    <label htmlFor="fechaNac">Fecha de Nacimiento</label>
                    </div>
                
                <div class="input-field col s12 m4">
                    <input id="phone" type="text" class="validate"/>
                    <label htmlFor="phone">Teléfono</label>
                    </div>
                
                <div class="input-field col s12 m4">
                    <input id="email" type="email" class="validate"/>
                    <label htmlFor="email">Correo Electrónico</label>
                </div>
                </div>
                <div className="row">
                <div class="input-field col s12 m4">
                <label>
                    <input class="with-gap" name="sexo" type="radio"  />
                    <span>Soy Hombre</span>
                </label>
                </div>
                <div class="input-field col s12 m4">
                <label>
                    <input class="with-gap" name="sexo" type="radio"  />
                    <span>Soy Mujer</span>
                </label>
                </div>
                <div class="input-field col s12 m4">
                <label>
                    <input class="with-gap" name="sexo" type="radio"  />
                    <span>No quiero decirlo.</span>
                </label>
                </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                    <textarea id="direccion" class="materialize-textarea"></textarea>
                    <label for="direccion">Dirección</label>
                    </div>
                </div>
                <div className="row">
                <div className="col s12">
                <a class="waves-effect waves-light btn orange" id="registrarCliente">Registrarse</a>
                </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default NuevoCliente;