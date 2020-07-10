import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class EditProductoModal extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
      M.updateTextFields();
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className="modal-trigger"
          data-target="modal1"
        >
          <i class="material-icons">edit</i>
        </a>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <div className="container">
            <div className="row">
            <h4>Editar Producto</h4>
            </div>
                <form className="container" >
                     <div className="row">
                        <div className="input-field col s12">
                        <input id="text" type="text" className="validate" value={this.props.urlImagen}/>
                        <label htmlFor="text">Link de la foto:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <input id="text" type="text" className="validate" value={this.props.titulo}/>
                        <label htmlFor="text">Titulo a mostrar:</label>
                        </div>
                        <div className="input-field col s6">
                        <input id="text" type="text" className="validate" value={this.props.precio}/>
                        <label htmlFor="text">Precio:</label>
                        </div>
                    </div>
                </form>
            </div>
          </div>
          <div className="modal-footer">

            <a className="modal-close waves-effect waves-green btn-flat">
              Enviar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProductoModal;
