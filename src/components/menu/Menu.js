import React,{Component} from 'react';
import './Menu.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Menu extends  Component{
    render() {
        const altura = window.innerHeight - 64;
        return(
            <div className="menuContainer" style={{height:altura +'px'}}>
                <div className="panelIzquierdo">
                    <div class="carousel carousel-slider center">
                        <div class="carousel-fixed-item center">
                        </div>
                        <div class="menuitem carousel-item white-text" style={{'background-image': 'url("https://i.ibb.co/K2RYmLN/panini-jamon.jpg")'}} href="#one!">
                            <p class="white-text" style={{'font-size':28+'px','font-family':'Segoe Print'}}>Panini de jamon</p>
                        </div>
                        <div class="menuitem carousel-item white-text" style={{'background-image': 'url("https://i.ibb.co/yNztNvS/panini-pavo.jpg")'}} href="#two!">
                        <p class="white-text" style={{'font-size':28+'px','font-family':'Segoe Print'}}>Panini de pavo</p>
                        </div>
                    </div>
                </div>
                <div className="panelDerecho">
                    <p id='categoria'>Categoria</p>
                    <select class="browser-default">
                        <option value="1">Paninis</option>
                        <option value="2">Bebidas heladas</option>
                    </select>
                    <p id='descripcion'>
                        [Descripcion]
                    </p>
                    <p id='precio'>
                        $85.00
                    </p>
                    <label>Disponible</label>
                    <p id='disponible'>
                        Si
                    </p>
                    <a id='agregar' href="#">
                    <p>
                        Agregar al carro
                    </p>
                </a>
                </div>
            </div>
        )
    };
}
export default Menu;