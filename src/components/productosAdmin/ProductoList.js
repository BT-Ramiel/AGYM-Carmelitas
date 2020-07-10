import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './ProductoList.css';
import GestProducto from './GestProducto'
import M from 'materialize-css'

class ProductoAdmin extends Component{
    constructor(props){
        super(props);

    }
    render(){
      var altura = 80;
        return(
          <a class="collection-item avatar listItem">
          <img class="circle" src={this.props.urlImagen} alt="" style={{height:altura +'px'}}/>
          <span class="title">{this.props.titulo}</span>
          <p>{this.props.precio}
          </p>
          <GestProducto urlImagen={this.props.urlImagen} titulo={this.props.titulo} precio ={this.props.precio}/>
          
        </a>
            

        );
    }

}
export default ProductoAdmin;