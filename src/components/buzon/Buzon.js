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
                <div className="row">
                <div className="col s12">
                <h5>Buzón de entrada</h5>
                </div>
                <ul className="collapsible listaBuzon col s12">
                    <Mensaje asunto="Mensaje 1" hora="10:12am"/>
                    <Mensaje asunto="Mensaje 2" hora="10:12am"/>
                    <Mensaje asunto="Mensaje 3" hora="10:12am"/>
                    <Mensaje asunto="Mensaje 4" hora="10:12am"/>
                    
                </ul>
                </div>
                <div className="row">
                    <div className="col s12">
                    <ul class="pagination listaBuzon">
                        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                        <li class="active cafecito"><a href="#!">1</a></li>
                        <li class="waves-effect"><a href="#!">2</a></li>
                        <li class="waves-effect"><a href="#!">3</a></li>
                        <li class="waves-effect"><a href="#!">4</a></li>
                        <li class="waves-effect"><a href="#!">5</a></li>
                        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default BuzonAdmin;