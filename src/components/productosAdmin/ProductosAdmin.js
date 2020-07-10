import React,{Component} from 'react';
import './ProductosAdmin.css'
import ProductoList from './ProductoList'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
class ProductosAdmin extends Component{
    componentDidMount(){
        M.updateTextFields();
    }
    render(){
        
        return(
            
            <div className="fondoGG">
            <div className="container cuadradoBlanco">
            <div className="row">
            <div className="col s12">
                <h3>Administración de productos</h3>
            </div>
            </div>
            <div className="row">
            <div className="col s12">
            <div className="collection">
                    <ProductoList urlImagen="https://i.ibb.co/RzcZ83T/prod1.jpg" titulo="Café Gourmet molido 1 libra" precio ="C$ 150.00" />

                    <ProductoList urlImagen="https://i.ibb.co/b1PkxGD/prod2.jpg" titulo="Rosquillas Mixtas Alonda" precio ="C$ 25.00" />

                    <ProductoList urlImagen="https://i.ibb.co/nkM64ph/prod3.jpg" titulo="Panini Pavo" precio ="C$ 85.00" />
                <ProductoList urlImagen="https://i.ibb.co/JFsxYYJ/prod4.jpg" titulo="Green Cool" precio ="C$ 50.00"/>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default ProductosAdmin;