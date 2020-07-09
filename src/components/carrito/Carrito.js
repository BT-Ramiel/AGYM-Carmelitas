import React,{Component} from 'react';
import './Carrito.css';
import {productos} from './carritoElementos.json'

class Carrito extends Component{
    constructor(){
        super();
        this.state = {
            productos
        }
    }
    render() {
        const listProductos = this.state.productos.map((prod,i) =>{
            return(
            <div className="collection-item center-align">

            <span>({prod.cantidad}) {prod.nombre} - C${prod.precio}</span>
            <span className="btnRemover">
            <span class="waves-effect waves-light red accent-4 btn-small"><i class="material-icons left">remove_circle</i>Remover</span>
            </span>
            </div>
            )
        })
        return(
           <div className="primary">
                <div className="container-pequeño">
                <div className="row contenedor">
                <div className="col s8 fondoComida" id="columna1">
                    
                    <h3 className="white-text">Artículos</h3>
                    <div className="bordes">
                        <div className="elementoLista">
                        {listProductos}
                        </div>
                    </div>
                </div>
                <div className="col s4 white-text fondoNegro" id="columna2">
                    <h5 className="white-text">Información de Pago</h5>
                    <div className="factura">
                        <div className="datosFactura">
                            <p>Subtotal: C$ XX.XX</p>
                            <p>Iva: C$ XXXXX.XX</p>
                            <p>Total: C$ XXXXXXX.XX</p>
                        </div>
                        <div className="formularioFactura">
                        <div class="row">
                            <form class="col s12">
                            <div class="row orange-text text-darken-4">
                                <div class="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">First Name</label>
                                </div>
                                <div class="input-field col s12">
                                <i class="material-icons prefix">call</i>
                                <input id="icon_telephone" type="tel" class="validate"/>
                                <label for="icon_telephone">Teléfono</label>
                                </div>
                                <div class="input-field col s12">
                                <i class="material-icons prefix">subtitles</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">Dirección</label>
                                </div>
                                <div class="input-field col s8">
                                <i class="material-icons prefix">credit_card</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">Tarjeta</label>
                                </div>
                                <div class="input-field col s4">
                                <i class="material-icons prefix">vpn_key</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">CVV</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="row">
                        <p className="col s12 red-text text-darken-4 avisoForm">
                        Importante:
                                Todos los envíos a domicilio solamente operan dentro de los límites de la ciudad de Managua.
                        </p>
                        </div>
                        <div className="row">
                            <div className="col s12">
                            <a class="btn-large pulse btnComprar">
                            <i class="material-icons">check</i>Realizar Compra</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
           </div>
            
        );
    }
}
export default Carrito;