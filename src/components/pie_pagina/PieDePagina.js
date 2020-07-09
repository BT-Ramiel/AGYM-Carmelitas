import React,{Component} from 'react';
import './PieDePagina.css';
import logoCarmelitas from '../../img/logoCarmelitas.png'

class PieDePagina extends Component{
    render() {
        return(
          <div>
        <footer className="page-footer">
          <div className="tituloConImagen">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h4>Contactos</h4>
              </div>
              <div className="col s12">
                <h5>Celular: <a href="tel:81380937">+505 81380937</a></h5>
              </div>
              <div className="col s12">
                <h5>Redes Sociales</h5>
              </div>
              <div className="col s4"> 
              <a href="facebook.com"><div className="logoFb">Síguenos en facebook!</div> </a>
              </div>
              <div className="col s4">
              <a href="instagram.com"><div className="logoIg">Síguenos en Instagram!</div></a>
              </div>
              <div className="col s4">
              <a href="instagram.com"><div className="logoTw">Síguenos en Twitter!</div></a>
              </div>
            </div>
            <div className="col s12">
            <h4>Correo: <a href="mailto::agarciadare@gmail.com">agarciadarce@gmail.com</a></h4>
            </div>
          </div>
          </div>
          <div className="footer-copyright">
            <div className="container center-align">
            <img src={logoCarmelitas} width="150px"className="logoCC"/>
            </div>
          </div>
        </footer>
        </div>
        );
    }
}
export default PieDePagina;