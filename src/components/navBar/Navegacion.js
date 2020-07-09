import React,{Component} from 'react';
import './Navegacion.css';

class Navegacion extends Component{
    render() {
        return(
            <nav>
                <div className="nav-wrapper navegacion">
                    <a href="#" className="brand-logo right">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navegacion;