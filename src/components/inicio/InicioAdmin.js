import React,{Component} from 'react';
import './Inicio.css';
import carmelitasLogo from '../../img/logoCarmelitas.png'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import ProductoAdmin from './producto/ProductoAdmin'
class InicioAdmin extends  Component{
    componentDidMount(){
    }

    render() {
        return(
            <div id="primary">
            <div className="fondoGG center-align">
            
            <div className="container">
                    <h4 className="texto">Página de Administración</h4>
            </div>
            <div className="container cuadradoBlanco">
            <div className="row">
                <div className="col s12">
                    <h5>Información en el inicio:</h5>
                </div>
                <ul class="collection col s6">
                    <ProductoAdmin urlImagen="https://i.ibb.co/RzcZ83T/prod1.jpg" titulo="Café Gourmet molido 1 libra" precio ="C$ 150.00" />

                    <ProductoAdmin urlImagen="https://i.ibb.co/b1PkxGD/prod2.jpg" titulo="Rosquillas Mixtas Alonda" precio ="C$ 25.00" />

                    <ProductoAdmin urlImagen="https://i.ibb.co/nkM64ph/prod3.jpg" titulo="Panini Pavo" precio ="C$ 85.00" />

                    <ProductoAdmin urlImagen="https://i.ibb.co/JFsxYYJ/prod4.jpg" titulo="Green Cool" precio ="C$ 50.00" />
                </ul>
                <div className="col s6">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="text" type="text" className="validate" value={this.props.titulo}/>
                        <label htmlFor="text">Link de Facebook:</label>
                        </div>
                        <div className="input-field col s12">
                        <input id="text" type="text" className="validate" value={this.props.precio}/>
                        <label htmlFor="text">Link de Instagram:</label>
                        </div>
                        <div className="input-field col s12">
                        <input id="text" type="text" className="validate" value={this.props.precio}/>
                        <label htmlFor="text">Link de Twitter:</label>
                        </div>
                        <div className="input-field col s12">
                        <a class="waves-effect waves-light btn">Editar Datos</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

            </div>
        )
    };
}
export default InicioAdmin;