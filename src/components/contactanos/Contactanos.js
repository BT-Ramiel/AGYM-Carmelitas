import React,{Component} from 'react';
import './Contactanos.css';

class Contactanos extends  Component{
    render() {
        const altura = window.innerHeight - 64;
        return(
            <div className="mainContainer" style={{height:altura +'px'}}>
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
                <a id='enviarMensaje' href="#">
                    <p>
                        Enviar mensajes
                    </p>
                </a>
            </div>
            )
    };
}
export default Contactanos;