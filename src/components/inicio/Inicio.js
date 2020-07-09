import React,{Component} from 'react';
import './Inicio.css';
import carmelitasLogo from '../../img/logoCarmelitas.png'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Producto from './producto/Producto'
class Inicio extends  Component{
    componentDidMount(){
        var instance;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
            instance = M.Carousel.init({
                fullWidth: true
              });
          });
    }
    render() {
        return(
            <div id="primary">
            <div className="fondoGG center-align">
            <div className="container">
                    <img src={carmelitasLogo} className="responsive-img imagenEnMedio"/>
                <h2 className="texto">¡Bienvenido a nuestra página!</h2>
            </div>
            </div>
            <div className="black">
            <div className="container">
                <div className="carousel carousel-slider">
                    <a className="carousel-item" href="#one!"><img src="https://i.ibb.co/18VR9bs/primera-Diapo.jpg"/></a>
                    <a className="carousel-item" href="#two!"><img src="https://i.ibb.co/QvQjXrC/segunda-Diapo.jpg"/></a>
                    <a className="carousel-item" href="#three!"><img src="https://i.ibb.co/X2ZRm5K/3era-Diapo.jpg"/></a>
                    <a className="carousel-item" href="#four!"><img src="https://i.ibb.co/sgQby1h/4taa-Diapo.jpg"/></a>
                    <a className="carousel-item" href="#five!"><img src="https://i.ibb.co/d4WRC0K/5taDiapo.jpg"/></a>
                    <a className="carousel-item" href="#six!"><img src="https://i.ibb.co/z6hgX1n/6taDiapo.jpg"/></a>
                </div>
                <div>
                    <img src="https://i.ibb.co/4dDxMWL/piepiepie.jpg" className="responsive-img"/>
                </div>                
            </div>
            </div>
            <div className="cafecito">
            <div className="container">
            <div className="row">
                <div className="col s12">
                    <h4 className="orange-text text-lighten">¡Conozca nuestros productos!</h4>
                </div>
            </div>
            <div className="row">
                <div className ="col s6">
                    <Producto urlImagen="https://i.ibb.co/RzcZ83T/prod1.jpg" titulo="Café Gourmet molido 1 libra" precio ="C$ 150.00" />
                </div>
                <div className ="col s6">
                    <Producto urlImagen="https://i.ibb.co/b1PkxGD/prod2.jpg" titulo="Rosquillas Mixtas Alonda" precio ="C$ 25.00" />
                </div>
                <div className ="col s6">
                    <Producto urlImagen="https://i.ibb.co/nkM64ph/prod3.jpg" titulo="Panini Pavo" precio ="C$ 85.00" />
                </div>
                <div className ="col s6">
                    <Producto urlImagen="https://i.ibb.co/JFsxYYJ/prod4.jpg" titulo="Green Cool" precio ="C$ 50.00" />
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    };
}
export default Inicio;