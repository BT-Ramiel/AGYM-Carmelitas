import React,{Component} from 'react';
import './Buzon.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class Mensaje extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li>
            <div className="collapsible-header">
                <i className="material-icons">chat</i>
                <span>{this.props.asunto}</span>   
                <span class="badge">{this.props.hora}</span>
            </div>
            <div className="collapsible-body">
            
            <div className="row">
                <div className="col s12">
                <h5>{this.props.asunto}</h5>

                <i className="horaChancha">{this.props.hora}</i>
                </div>
                <div className="col s12">
                <p className="contenidoMensaje">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam quis laboriosam, omnis laudantium odit modi assumenda explicabo cumque veniam nostrum suscipit, minima aspernatur, magnam sequi. Similique id voluptatibus maxime.
                </p>
                </div>
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Respuesta al mensaje: </label>
                    </div>
                </div>
                </form>
                <div className="col s4">
                <a class="waves-effect green waves-light btn">Enviar</a>
                </div>
                <div className="col s4">
                <a class="waves-effect yellow waves-light btn">Archivar</a>
                </div>
                <div className="col s4">
                <a class="waves-effect red waves-light btn">Eliminar</a>
                </div>
            </div>
            </div>
            </li>

        )
    }
}
export default Mensaje