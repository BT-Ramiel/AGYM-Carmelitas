import React,{Component} from 'react';
import './Buzon.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Mensaje from './Mensaje'
class BuzonAdmin extends Component{
    componentDidMount(){
            console.log('domEvent buzón')
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
    }
    render(){
        return(
            <div className="primary">
                <div className="container cuadradoBlanco">

                <ul className="collapsible buzonMensajes">
                    <Mensaje asunto="Mensaje 1" hora="10:12am"/>
                    <Mensaje asunto="Mensaje 2" hora="10:12am"/>
                    <Mensaje asunto="Mensaje 3" hora="10:12am"/>
                    <Mensaje asunto="Mensaje 4" hora="10:12am"/>
                    
                </ul>
                </div>
            </div>
        )
    }
}
export default BuzonAdmin;