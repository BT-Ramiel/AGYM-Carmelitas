import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Navegacion from "./components/navBar/Navegacion";
import PieDePagina from "./components/pie_pagina/PieDePagina";

import Inicio from "./components/inicio/Inicio";
import Menu from "./components/menu/Menu";
import QuienesSomos from "./components/quienes-somos/QuienesSomos"
import Contactanos from "./components/contactanos/Contactanos";
import Registro from "./components/registro/Registro";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <Navegacion/>
    </React.StrictMode>,
    document.getElementById('navegacion')
);
ReactDOM.render(
    <React.StrictMode>
        <PieDePagina/>
    </React.StrictMode>,
    document.getElementById('pie-pagina')
);
var varInicio = document.getElementById("navInicio");
var varMenu = document.getElementById("navMenu");
var varQuienesSomos = document.getElementById("navQuienesSomos");
var varContactanos = document.getElementById("navContactanos");
var varRegistro = document.getElementById("navRegistro");

varInicio.onclick = irAlInicio();
varMenu.onclick = irAlMenu();
varQuienesSomos.onclick  = irAlQuienesSomos();
varContactanos.onclick = irAlContactanos();
varRegistro.onclick = irARegistrarse();


function irAlInicio(){
    ReactDOM.render(
        <React.StrictMode>
            <Inicio />
        </React.StrictMode>,
        document.getElementById('root')
)};
function irAlMenu(){
    ReactDOM.render(
        <React.StrictMode>
            <Menu />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
function irAlQuienesSomos(){
    ReactDOM.render(
        <React.StrictMode>
            <QuienesSomos />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
function irAlContactanos () {
    ReactDOM.render(
        <React.StrictMode>
            <Contactanos />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
function irARegistrarse(){
    ReactDOM.render(
        <React.StrictMode>
            <Registro />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
