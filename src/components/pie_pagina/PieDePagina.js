import React,{Component} from 'react';
import './PieDePagina.css';
import logoCarmelitas from '../../img/logoCarmelitas.png'

class PieDePagina extends Component{
    render() {
        return(
          <div>
        <footer className="page-footer">
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