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
                <i className="horaChancha">{this.props.hora}</i>
            </div>
            <div className="collapsible-body">
            
            <div className="row">
                <div className="col s12">
                <h5>{this.props.asunto}</h5>
                </div>
                <div className="col s12">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam quis laboriosam, omnis laudantium odit modi assumenda explicabo cumque veniam nostrum suscipit, minima aspernatur, magnam sequi. Similique id voluptatibus maxime.
                </p>
                </div>
            </div>
            </div>
            </li>

        )
    }
}
export default Mensaje