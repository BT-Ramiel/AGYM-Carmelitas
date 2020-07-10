import React,{Component} from 'react';
import './Producto.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Producto extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="card card-producto">
            <div className="card-content">
              <img src={this.props.urlImagen} className="imgCardInicio" />
              <span className="card-title">{this.props.titulo}</span>
            </div>
            <div className="card-content">
              <h5><em>{this.props.precio}</em></h5>
            </div>
          </div>

        );
    }

}
export default Producto;