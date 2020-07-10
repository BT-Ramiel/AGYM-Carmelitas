import React,{Component} from 'react';
import './Contactanos.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
class Contactanos extends  Component{

    render() {
        
        return(
            <div className="mainContainerContactanos">
                <p id="contactanos"><i class="medium material-icons">mail</i> Contáctanos</p>
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate"></input>
                    <label for="email">Email</label>
                </div>
                <div class="input-field col s6">
                    <input id="asunto" type="text" class="validate"></input>
                    <label for="asunto">Asunto</label>
                </div>
                <div id='mensajeCampo' class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" style={{height: 200+'px', 'max-height':200+'px'}}></textarea>
                    <label for="textarea1">Mensaje</label>
                </div>
                <div id='enviarMensaje'>
                    <p>
                    Enviar Mensaje
                    </p>
                </div>
                
            </div>
            )
    };
}
export default Contactanos;