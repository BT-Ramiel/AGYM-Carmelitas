import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './ProductoAdmin.css';
import EditProductModal from '../EditProductoModal'
import M from 'materialize-css'

class ProductoAdmin extends Component{
    constructor(props){
        super(props);

    }
    render(){
      var altura = 80;
        return(
          <li class="collection-item avatar listItem">
          <img class="circle" src={this.props.urlImagen} alt="" style={{height:altura +'px'}}/>
          <span class="title">{this.props.titulo}</span>
          <p>{this.props.precio}
          </p>
          <EditProductModal urlImagen={this.props.urlImagen} titulo={this.props.titulo} precio ={this.props.precio}/>
          
        </li>
            

        );
    }

}
export default ProductoAdmin;