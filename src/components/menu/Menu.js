import React,{Component} from 'react';
import './Menu.css';

class Menu extends  Component{
    render() {
        const altura = window.innerHeight - 64;
        return(
            <div className="menuContainer" style={{height:altura +'px'}}>
                <div className="panelIzquierdo">

                </div>
                <div className="panelDerecho">

                </div>
            </div>
        )
    };
}
export default Menu;