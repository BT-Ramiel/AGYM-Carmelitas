import React,{Component} from 'react';
import './SoporteAdmin.css'

class SoporteAdmin extends Component{

    render(){
        const altura = window.innerHeight - 64;
        return(
            <div className='soporteAdminContainer' style={{height:altura +'px'}}>
                <p id="titulo"><i class="medium material-icons">mail</i> ¿Hay algún error en el sistema? Envíanos un mensaje</p>
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
    }
}
export default SoporteAdmin;